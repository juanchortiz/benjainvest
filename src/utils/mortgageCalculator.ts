import mortgageRates from '@/data/mortgageRates.json';

export type Modalidad = 'fija' | 'variable' | 'mista';
export type Indexacion = 'Euribor3m' | 'Euribor6m' | 'Euribor12m';

export interface MortgageInput {
  valorImovel: number;
  valorAvaliacao?: number;
  entrada: number;
  prazoAnos: number;
  modalidade: Modalidad;
  indexacao?: Indexacion;
  spread: number;
  taxaFija?: number;
  anosFijos?: number; // Para modalidad mista
  comissaoAbertura: number;
  segurosAnuais: number;
  idadeProponente: number;
  primeiraHabitacao: boolean;
}

export interface AmortizationEntry {
  mes: number;
  capitalAmortizado: number;
  juros: number;
  cuota: number;
  saldo: number;
}

export interface MortgageOutput {
  capitalFinanciado: number;
  taxaNominalAnual: number;
  prestacaoMensal: number;
  custoTotalJuros: number;
  MTIC: number;
  TAEG: number;
  cronogramaAmortizacao: AmortizationEntry[];
  validacao: {
    prazoValido: boolean;
    financiamentoMaximoValido: boolean;
    garantiaEstatalAplicavel: boolean;
    mensajeError?: string;
  };
  explicacao: string;
}

// Validar límite de plazo según edad
export function getPlazoMaximo(edad: number): number {
  if (edad <= 30) return mortgageRates.limitesEdad.hasta30;
  if (edad <= 35) return mortgageRates.limitesEdad.hasta35;
  return mortgageRates.limitesEdad.mas35;
}

// Calcular porcentaje máximo financiable
export function getPorcentajeMaximoFinanciable(
  edad: number, 
  primeiraHabitacao: boolean
): number {
  if (edad <= 35 && primeiraHabitacao) {
    return mortgageRates.limitesFinanciamiento.jovenes; // 100%
  }
  return mortgageRates.limitesFinanciamiento.general; // 80%
}

// Obtener Euribor según indexación
function getEuribor(indexacion: Indexacion): number {
  switch (indexacion) {
    case 'Euribor3m':
      return mortgageRates.euribor['3m'];
    case 'Euribor6m':
      return mortgageRates.euribor['6m'];
    case 'Euribor12m':
      return mortgageRates.euribor['12m'];
    default:
      return mortgageRates.euribor['12m'];
  }
}

// Calcular tasa nominal anual
export function computeNominalRate(input: MortgageInput): number {
  if (input.modalidade === 'fija') {
    return input.taxaFija || 4.0;
  }
  
  if (input.modalidade === 'variable' && input.indexacion) {
    const euribor = getEuribor(input.indexacion);
    return euribor + input.spread;
  }
  
  // Para mista, usar tasa fija inicialmente
  if (input.modalidade === 'mista') {
    return input.taxaFija || 3.5;
  }
  
  return 4.0; // Default
}

// Validar inputs
export function validateInputs(input: MortgageInput): {
  valid: boolean;
  prazoValido: boolean;
  financiamentoMaximoValido: boolean;
  garantiaEstatalAplicavel: boolean;
  mensajeError?: string;
} {
  const plazoMaximo = getPlazoMaximo(input.idadeProponente);
  const prazoValido = input.prazoAnos <= plazoMaximo;
  
  const valorBase = Math.min(
    input.valorImovel,
    input.valorAvaliacao || input.valorImovel
  );
  
  const porcentajeMaximo = getPorcentajeMaximoFinanciable(
    input.idadeProponente,
    input.primeiraHabitacao
  );
  
  const capitalSolicitado = input.valorImovel - input.entrada;
  const maxFinanciable = (valorBase * porcentajeMaximo) / 100;
  const financiamentoMaximoValido = capitalSolicitado <= maxFinanciable;
  
  const garantiaEstatalAplicavel = 
    input.idadeProponente <= mortgageRates.garantiaEstatal.edadMaxima &&
    input.primeiraHabitacao &&
    mortgageRates.garantiaEstatal.soloViviendaPermanente;
  
  let mensajeError;
  if (!prazoValido) {
    mensajeError = `Plazo máximo permitido para su edad: ${plazoMaximo} años`;
  } else if (!financiamentoMaximoValido) {
    mensajeError = `Financiamiento máximo: ${porcentajeMaximo}% (€${maxFinanciable.toFixed(0)})`;
  }
  
  return {
    valid: prazoValido && financiamentoMaximoValido,
    prazoValido,
    financiamentoMaximoValido,
    garantiaEstatalAplicavel,
    mensajeError
  };
}

// Calcular cuota mensual (sistema francés)
export function calculateMonthlyPayment(
  capital: number,
  tasaAnual: number,
  meses: number
): number {
  if (capital <= 0 || meses <= 0) return 0;
  
  const tasaMensual = tasaAnual / 100 / 12;
  
  if (tasaMensual === 0) {
    return capital / meses;
  }
  
  const cuota = capital * (tasaMensual * Math.pow(1 + tasaMensual, meses)) / 
                (Math.pow(1 + tasaMensual, meses) - 1);
  
  return cuota;
}

// Generar cronograma de amortización
export function generateAmortizationSchedule(
  capital: number,
  tasaAnual: number,
  meses: number,
  modalidade: Modalidad,
  anosFijos?: number,
  tasaVariable?: number
): AmortizationEntry[] {
  const cronograma: AmortizationEntry[] = [];
  let saldoRestante = capital;
  const tasaMensual = tasaAnual / 100 / 12;
  
  // Calcular cuota
  let cuotaMensual = calculateMonthlyPayment(capital, tasaAnual, meses);
  
  for (let mes = 1; mes <= meses; mes++) {
    // Para modalidad mista, cambiar tasa después de años fijos
    let tasaActual = tasaMensual;
    if (modalidade === 'mista' && anosFijos && mes > anosFijos * 12 && tasaVariable) {
      tasaActual = tasaVariable / 100 / 12;
      // Recalcular cuota para el período variable
      if (mes === anosFijos * 12 + 1) {
        const mesesRestantes = meses - (anosFijos * 12);
        cuotaMensual = calculateMonthlyPayment(saldoRestante, tasaVariable, mesesRestantes);
      }
    }
    
    const juros = saldoRestante * tasaActual;
    const capitalAmortizado = cuotaMensual - juros;
    saldoRestante -= capitalAmortizado;
    
    // Ajuste para último mes por redondeos
    if (mes === meses && saldoRestante < 0.01) {
      saldoRestante = 0;
    }
    
    cronograma.push({
      mes,
      capitalAmortizado,
      juros,
      cuota: cuotaMensual,
      saldo: Math.max(0, saldoRestante)
    });
  }
  
  return cronograma;
}

// Calcular MTIC (Montante Total Imputado ao Consumidor)
export function calculateMTIC(
  cronograma: AmortizationEntry[],
  capital: number,
  comissaoAbertura: number,
  segurosAnuais: number,
  prazoAnos: number
): number {
  const totalCuotas = cronograma.reduce((sum, entry) => sum + entry.cuota, 0);
  const comissionAperturaValor = capital * (comissaoAbertura / 100);
  const totalSeguros = segurosAnuais * prazoAnos;
  
  return totalCuotas + comissionAperturaValor + totalSeguros;
}

// Calcular TAEG mediante TIR (método simplificado)
export function calculateTAEG(
  capital: number,
  cronograma: AmortizationEntry[],
  comissaoAbertura: number,
  segurosAnuais: number
): number {
  const comissionAperturaValor = capital * (comissaoAbertura / 100);
  const desembolsoNeto = capital - comissionAperturaValor;
  const seguroMensual = segurosAnuais / 12;
  
  // Método de aproximación iterativa (Newton-Raphson simplificado)
  let taeg = 5.0; // Estimación inicial 5%
  let iteraciones = 0;
  const maxIteraciones = 50;
  const tolerancia = 0.0001;
  
  while (iteraciones < maxIteraciones) {
    const tasaMensual = taeg / 100 / 12;
    let vpTotal = 0;
    
    // Valor presente de flujos
    for (let i = 0; i < cronograma.length; i++) {
      const flujo = cronograma[i].cuota + seguroMensual;
      vpTotal += flujo / Math.pow(1 + tasaMensual, i + 1);
    }
    
    const diferencia = vpTotal - desembolsoNeto;
    
    if (Math.abs(diferencia) < tolerancia) {
      break;
    }
    
    // Ajustar TAEG
    if (diferencia > 0) {
      taeg += 0.01;
    } else {
      taeg -= 0.01;
    }
    
    iteraciones++;
  }
  
  return Math.max(0, taeg);
}

// Función principal de cálculo
export function calcularHipoteca(input: MortgageInput): MortgageOutput {
  // Validaciones
  const validacion = validateInputs(input);
  
  const valorBase = Math.min(
    input.valorImovel,
    input.valorAvaliacao || input.valorImovel
  );
  
  const capitalFinanciado = input.valorImovel - input.entrada;
  const taxaNominalAnual = computeNominalRate(input);
  const meses = input.prazoAnos * 12;
  
  // Calcular tasa variable para modalidad mista
  let tasaVariable;
  if (input.modalidade === 'mista' && input.indexacion) {
    const euribor = getEuribor(input.indexacion);
    tasaVariable = euribor + input.spread;
  }
  
  // Generar cronograma
  const cronograma = generateAmortizationSchedule(
    capitalFinanciado,
    taxaNominalAnual,
    meses,
    input.modalidade,
    input.anosFijos,
    tasaVariable
  );
  
  const prestacaoMensal = cronograma.length > 0 ? cronograma[0].cuota : 0;
  const custoTotalJuros = cronograma.reduce((sum, entry) => sum + entry.juros, 0);
  
  const MTIC = calculateMTIC(
    cronograma,
    capitalFinanciado,
    input.comissaoAbertura,
    input.segurosAnuais,
    input.prazoAnos
  );
  
  const TAEG = calculateTAEG(
    capitalFinanciado,
    cronograma,
    input.comissaoAbertura,
    input.segurosAnuais
  );
  
  // Generar explicación
  let explicacion = `Simulación de crédito habitacional: `;
  explicacion += `Capital financiado €${capitalFinanciado.toLocaleString('pt-PT')}. `;
  explicacion += `Modalidad ${input.modalidade}. `;
  
  if (input.modalidade === 'variable') {
    explicacion += `Tasa indexada a ${input.indexacion} (${getEuribor(input.indexacion!).toFixed(2)}%) + spread ${input.spread}%. `;
  } else if (input.modalidade === 'fija') {
    explicacion += `Tasa fija ${taxaNominalAnual.toFixed(2)}%. `;
  } else if (input.modalidade === 'mista') {
    explicacion += `${input.anosFijos} años a tasa fija ${taxaNominalAnual.toFixed(2)}%, luego variable. `;
  }
  
  if (validacion.garantiaEstatalAplicavel) {
    explicacion += `Elegible para garantía estatal (hasta 15% del capital). `;
  }
  
  return {
    capitalFinanciado,
    taxaNominalAnual,
    prestacaoMensal,
    custoTotalJuros,
    MTIC,
    TAEG,
    cronogramaAmortizacao: cronograma,
    validacao: validacion,
    explicacao: explicacion
  };
}

