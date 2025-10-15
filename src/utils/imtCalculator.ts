import imtTables from '@/data/imtTables.json';

export type Finalidade = 'habitacaoPropriaPermanente' | 'habitacaoSecundaria' | 'outros' | 'predioRustico';
export type Regiao = 'continente' | 'madeira' | 'acores';

export interface IMTInput {
  valorAquisicao: number;
  valorPatrimonial: number;
  finalidade: Finalidade;
  regiao: Regiao;
  idadeComprador: number;
  primeiraHabitacao: boolean;
}

export interface IMTOutput {
  baseTributavel: number;
  regime: string;
  imtBruto: number;
  parcelaAbater: number;
  imtFinal: number;
  impostoSelo: number;
  total: number;
  mensagem: string;
  detalhes?: {
    escalao?: string;
    taxa?: number;
  };
}

interface EscalaoIMT {
  min: number;
  max: number;
  taxa: number;
  parcelaAbater: number;
}

function aplicarMultiplicadorRegiao(valor: number, regiao: Regiao): number {
  if (regiao === 'madeira' || regiao === 'acores') {
    return valor * (imtTables.multiplicadorRegioes[regiao] || 1);
  }
  return valor;
}

function getTabelaIMT(finalidade: Finalidade, regiao: Regiao): EscalaoIMT[] {
  const tabelaContinente = imtTables.continente[finalidade] || imtTables.continente.outros;
  
  if (regiao === 'continente') {
    return tabelaContinente;
  }
  
  // Aplicar multiplicador para Madeira/Açores
  const multiplicador = imtTables.multiplicadorRegioes[regiao] || 1;
  return tabelaContinente.map(escalao => ({
    ...escalao,
    min: Math.round(escalao.min * multiplicador),
    max: Math.round(escalao.max * multiplicador),
    parcelaAbater: escalao.parcelaAbater * multiplicador
  }));
}

function calcularRegimeJovem(base: number, regiao: Regiao): IMTOutput | null {
  const { limiteIsencao, limiteReducao, taxaReducao, limiteMaximo, taxaMaxima } = imtTables.regimeJovem;
  
  // Aplicar multiplicador regional aos limites
  const limiteIsencaoAjustado = aplicarMultiplicadorRegiao(limiteIsencao, regiao);
  const limiteReducaoAjustado = aplicarMultiplicadorRegiao(limiteReducao, regiao);
  const limiteMaximoAjustado = aplicarMultiplicadorRegiao(limiteMaximo, regiao);
  
  // Isento total
  if (base <= limiteIsencaoAjustado) {
    return {
      baseTributavel: base,
      regime: 'Regime Jovem - Isento',
      imtBruto: 0,
      parcelaAbater: 0,
      imtFinal: 0,
      impostoSelo: 0,
      total: 0,
      mensagem: 'Isento de IMT e Imposto do Selo (Regime Jovem)',
      detalhes: {
        escalao: `Até €${limiteIsencaoAjustado.toLocaleString('pt-PT')}`,
        taxa: 0
      }
    };
  }
  
  // Pagamento reduzido (8% sobre excedente)
  if (base <= limiteReducaoAjustado) {
    const excedente = base - limiteIsencaoAjustado;
    const imt = excedente * (taxaReducao / 100);
    
    return {
      baseTributavel: base,
      regime: 'Regime Jovem - Reduzido',
      imtBruto: imt,
      parcelaAbater: 0,
      imtFinal: Math.round(imt),
      impostoSelo: 0,
      total: Math.round(imt),
      mensagem: `Isento de Imposto do Selo. IMT: ${taxaReducao}% sobre excedente de €${limiteIsencaoAjustado.toLocaleString('pt-PT')}`,
      detalhes: {
        escalao: `€${limiteIsencaoAjustado.toLocaleString('pt-PT')} - €${limiteReducaoAjustado.toLocaleString('pt-PT')}`,
        taxa: taxaReducao
      }
    };
  }
  
  // Acima do limite do regime jovem, mas dentro do limite máximo
  if (base <= limiteMaximoAjustado) {
    const imt = base * (taxaMaxima / 100);
    
    return {
      baseTributavel: base,
      regime: 'Regime Jovem - Taxa Máxima',
      imtBruto: imt,
      parcelaAbater: 0,
      imtFinal: Math.round(imt),
      impostoSelo: 0,
      total: Math.round(imt),
      mensagem: `Taxa fixa de ${taxaMaxima}%. Isento de Imposto do Selo.`,
      detalhes: {
        escalao: `€${limiteReducaoAjustado.toLocaleString('pt-PT')} - €${limiteMaximoAjustado.toLocaleString('pt-PT')}`,
        taxa: taxaMaxima
      }
    };
  }
  
  // Acima do limite máximo - não se aplica regime jovem
  return null;
}

export function calcularIMT(input: IMTInput): IMTOutput {
  // Validação de entrada
  if (input.valorAquisicao < 0 || input.valorPatrimonial < 0) {
    throw new Error('Valores não podem ser negativos');
  }
  
  // Base tributável: maior valor entre aquisição e patrimonial
  const baseTributavel = Math.max(input.valorAquisicao, input.valorPatrimonial);
  
  if (baseTributavel === 0) {
    return {
      baseTributavel: 0,
      regime: 'N/A',
      imtBruto: 0,
      parcelaAbater: 0,
      imtFinal: 0,
      impostoSelo: 0,
      total: 0,
      mensagem: 'Insira valores válidos para cálculo'
    };
  }
  
  // Verificar regime jovem
  if (
    input.idadeComprador <= imtTables.regimeJovem.idadeMaxima &&
    input.primeiraHabitacao &&
    input.finalidade === 'habitacaoPropriaPermanente'
  ) {
    const resultadoJovem = calcularRegimeJovem(baseTributavel, input.regiao);
    if (resultadoJovem) {
      return resultadoJovem;
    }
  }
  
  // Regime normal
  const tabela = getTabelaIMT(input.finalidade, input.regiao);
  let imtBruto = 0;
  let parcelaAbater = 0;
  let escalaoEncontrado = false;
  let detalhesEscalao = '';
  let taxa = 0;
  
  // Procurar escalão apropriado
  for (const escalao of tabela) {
    if (baseTributavel >= escalao.min && baseTributavel <= escalao.max) {
      imtBruto = (baseTributavel * escalao.taxa) / 100;
      parcelaAbater = escalao.parcelaAbater;
      escalaoEncontrado = true;
      detalhesEscalao = `€${escalao.min.toLocaleString('pt-PT')} - €${escalao.max.toLocaleString('pt-PT')}`;
      taxa = escalao.taxa;
      break;
    }
  }
  
  // Se exceder a tabela, aplicar taxa máxima (7.5% flat)
  if (!escalaoEncontrado && baseTributavel > tabela[tabela.length - 1].max) {
    imtBruto = baseTributavel * 0.075;
    parcelaAbater = 0;
    detalhesEscalao = `Acima de €${tabela[tabela.length - 1].max.toLocaleString('pt-PT')}`;
    taxa = 7.5;
  }
  
  const imtFinal = Math.max(0, imtBruto - parcelaAbater);
  
  // Calcular Imposto do Selo (0.8%)
  const impostoSelo = (baseTributavel * imtTables.impostoSelo.taxa) / 100;
  
  const total = imtFinal + impostoSelo;
  
  let mensagem = '';
  if (imtFinal === 0 && escalaoEncontrado) {
    mensagem = 'Isento de IMT';
  } else {
    mensagem = `IMT: ${taxa}% sobre base tributável. Imposto do Selo: ${imtTables.impostoSelo.taxa}%`;
  }
  
  return {
    baseTributavel: Math.round(baseTributavel),
    regime: 'Normal',
    imtBruto: Math.round(imtBruto),
    parcelaAbater: Math.round(parcelaAbater),
    imtFinal: Math.round(imtFinal),
    impostoSelo: Math.round(impostoSelo),
    total: Math.round(total),
    mensagem,
    detalhes: {
      escalao: detalhesEscalao,
      taxa
    }
  };
}

