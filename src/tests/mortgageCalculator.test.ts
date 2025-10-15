import { calcularHipoteca, MortgageInput } from '@/utils/mortgageCalculator';

/**
 * CASOS DE PRUEBA - SIMULADOR DE CRÉDITO HABITACIONAL PORTUGAL 2025
 * 
 * Estos casos prueban diferentes escenarios según las reglas regulatorias:
 * 1. Tasa Fija - Cliente estándar
 * 2. Tasa Variable - Cliente con entrada del 20%
 * 3. Garantía Estatal - Joven ≤35 años, primera vivienda
 */

// Caso 1: Tasa Fija - Cliente Estándar
export const testCase1_TasaFija = (): void => {
  console.log('\n=== CASO 1: TASA FIJA - CLIENTE ESTÁNDAR ===\n');
  
  const input: MortgageInput = {
    valorImovel: 300000,
    valorAvaliacao: 300000,
    entrada: 60000, // 20% entrada
    prazoAnos: 30,
    modalidade: 'fija',
    taxaFija: 4.0,
    comissaoAbertura: 0.5,
    segurosAnuais: 600,
    idadeProponente: 40,
    primeiraHabitacao: false,
  };
  
  const result = calcularHipoteca(input);
  
  console.log(`Valor del Inmueble: €${input.valorImovel.toLocaleString('pt-PT')}`);
  console.log(`Entrada: €${input.entrada.toLocaleString('pt-PT')} (${((input.entrada/input.valorImovel)*100).toFixed(1)}%)`);
  console.log(`Capital Financiado: €${result.capitalFinanciado.toLocaleString('pt-PT')}`);
  console.log(`Plazo: ${input.prazoAnos} años`);
  console.log(`Modalidad: Tasa Fija ${input.taxaFija}%`);
  console.log(`\n📊 RESULTADOS:`);
  console.log(`   Cuota Mensual: €${result.prestacaoMensal.toLocaleString('pt-PT')}`);
  console.log(`   Total Intereses: €${result.custoTotalJuros.toLocaleString('pt-PT')}`);
  console.log(`   MTIC: €${result.MTIC.toLocaleString('pt-PT')}`);
  console.log(`   TAEG: ${result.TAEG.toFixed(2)}%`);
  console.log(`\n✅ Validaciones:`);
  console.log(`   Plazo válido: ${result.validacao.prazoValido ? 'SÍ' : 'NO'}`);
  console.log(`   Financiamiento válido: ${result.validacao.financiamentoMaximoValido ? 'SÍ' : 'NO'}`);
  console.log(`   Garantía estatal: ${result.validacao.garantiaEstatalAplicavel ? 'SÍ' : 'NO'}`);
  
  // Assertions
  if (result.capitalFinanciado !== 240000) {
    console.error(`❌ ERROR: Capital financiado debería ser €240,000`);
  }
  if (result.taxaNominalAnual !== 4.0) {
    console.error(`❌ ERROR: Tasa nominal debería ser 4.0%`);
  }
  if (!result.validacao.prazoValido) {
    console.error(`❌ ERROR: Plazo debería ser válido`);
  }
  
  console.log('\n✅ Caso 1 completado\n');
};

// Caso 2: Tasa Variable - Euribor + Spread
export const testCase2_TasaVariable = (): void => {
  console.log('\n=== CASO 2: TASA VARIABLE - EURIBOR 12M + SPREAD ===\n');
  
  const input: MortgageInput = {
    valorImovel: 250000,
    valorAvaliacao: 260000,
    entrada: 50000, // 20% entrada
    prazoAnos: 25,
    modalidade: 'variable',
    indexacao: 'Euribor12m',
    spread: 1.2,
    comissaoAbertura: 0.5,
    segurosAnuais: 500,
    idadeProponente: 32,
    primeiraHabitacao: false,
  };
  
  const result = calcularHipoteca(input);
  
  console.log(`Valor del Inmueble: €${input.valorImovel.toLocaleString('pt-PT')}`);
  console.log(`Entrada: €${input.entrada.toLocaleString('pt-PT')} (${((input.entrada/input.valorImovel)*100).toFixed(1)}%)`);
  console.log(`Capital Financiado: €${result.capitalFinanciado.toLocaleString('pt-PT')}`);
  console.log(`Plazo: ${input.prazoAnos} años`);
  console.log(`Modalidad: Variable (Euribor 12M + ${input.spread}%)`);
  console.log(`Tasa Resultante: ${result.taxaNominalAnual.toFixed(2)}%`);
  console.log(`\n📊 RESULTADOS:`);
  console.log(`   Cuota Mensual: €${result.prestacaoMensal.toLocaleString('pt-PT')}`);
  console.log(`   Total Intereses: €${result.custoTotalJuros.toLocaleString('pt-PT')}`);
  console.log(`   MTIC: €${result.MTIC.toLocaleString('pt-PT')}`);
  console.log(`   TAEG: ${result.TAEG.toFixed(2)}%`);
  console.log(`\n✅ Validaciones:`);
  console.log(`   Plazo válido: ${result.validacao.prazoValido ? 'SÍ' : 'NO'}`);
  console.log(`   Financiamiento válido: ${result.validacao.financiamentoMaximoValido ? 'SÍ' : 'NO'}`);
  console.log(`   Garantía estatal: ${result.validacao.garantiaEstatalAplicavel ? 'SÍ' : 'NO'}`);
  
  // Assertions
  if (result.capitalFinanciado !== 200000) {
    console.error(`❌ ERROR: Capital financiado debería ser €200,000`);
  }
  // Euribor 12M (2.8%) + Spread (1.2%) = 4.0%
  if (result.taxaNominalAnual !== 4.0) {
    console.error(`❌ ERROR: Tasa nominal debería ser 4.0% (2.8% + 1.2%)`);
  }
  if (!result.validacao.prazoValido) {
    console.error(`❌ ERROR: Plazo debería ser válido para edad 32`);
  }
  
  console.log('\n✅ Caso 2 completado\n');
};

// Caso 3: Garantía Estatal - Joven ≤35 años, Primera Vivienda
export const testCase3_GarantiaEstatal = (): void => {
  console.log('\n=== CASO 3: GARANTÍA ESTATAL - JOVEN PRIMERA VIVIENDA ===\n');
  
  const input: MortgageInput = {
    valorImovel: 200000,
    valorAvaliacao: 200000,
    entrada: 0, // 0% entrada - 100% financiamiento con garantía estatal
    prazoAnos: 35,
    modalidade: 'mista',
    indexacao: 'Euribor12m',
    spread: 1.0,
    taxaFija: 3.5,
    anosFijos: 5,
    comissaoAbertura: 0.3,
    segurosAnuais: 400,
    idadeProponente: 30,
    primeiraHabitacao: true,
  };
  
  const result = calcularHipoteca(input);
  
  console.log(`Valor del Inmueble: €${input.valorImovel.toLocaleString('pt-PT')}`);
  console.log(`Entrada: €${input.entrada.toLocaleString('pt-PT')} (${((input.entrada/input.valorImovel)*100).toFixed(1)}%)`);
  console.log(`Capital Financiado: €${result.capitalFinanciado.toLocaleString('pt-PT')} (100%)`);
  console.log(`Plazo: ${input.prazoAnos} años`);
  console.log(`Modalidad: Mista (${input.anosFijos} años fija ${input.taxaFija}%, luego variable)`);
  console.log(`Edad: ${input.idadeProponente} años - Primera Vivienda: SÍ`);
  console.log(`\n📊 RESULTADOS:`);
  console.log(`   Cuota Mensual (5 primeros años): €${result.prestacaoMensal.toLocaleString('pt-PT')}`);
  console.log(`   Total Intereses: €${result.custoTotalJuros.toLocaleString('pt-PT')}`);
  console.log(`   MTIC: €${result.MTIC.toLocaleString('pt-PT')}`);
  console.log(`   TAEG: ${result.TAEG.toFixed(2)}%`);
  console.log(`\n✅ Validaciones:`);
  console.log(`   Plazo válido: ${result.validacao.prazoValido ? 'SÍ' : 'NO'} (Max 40 años para ≤30 años)`);
  console.log(`   Financiamiento válido: ${result.validacao.financiamentoMaximoValido ? 'SÍ' : 'NO'} (100% permitido)`);
  console.log(`   Garantía estatal: ${result.validacao.garantiaEstatalAplicavel ? 'SÍ (hasta 15%)' : 'NO'}`);
  
  // Assertions
  if (result.capitalFinanciado !== 200000) {
    console.error(`❌ ERROR: Capital financiado debería ser €200,000`);
  }
  if (!result.validacao.garantiaEstatalAplicavel) {
    console.error(`❌ ERROR: Debería ser elegible para garantía estatal`);
  }
  if (!result.validacao.prazoValido) {
    console.error(`❌ ERROR: Plazo 35 años debería ser válido para edad 30`);
  }
  if (!result.validacao.financiamentoMaximoValido) {
    console.error(`❌ ERROR: 100% financiamiento debería ser válido con garantía estatal`);
  }
  
  console.log(`\n💡 NOTA: Con garantía estatal, el Estado garantiza hasta 15% del capital (€${(result.capitalFinanciado * 0.15).toLocaleString('pt-PT')})`);
  console.log('    permitiendo financiamiento al 100% para jóvenes ≤35 años en primera vivienda.');
  
  console.log('\n✅ Caso 3 completado\n');
};

// Ejecutar todos los casos de prueba
export const runAllTests = (): void => {
  console.log('\n' + '='.repeat(70));
  console.log('SIMULADOR DE CRÉDITO HABITACIONAL PORTUGAL 2025 - CASOS DE PRUEBA');
  console.log('='.repeat(70));
  
  testCase1_TasaFija();
  console.log('-'.repeat(70));
  testCase2_TasaVariable();
  console.log('-'.repeat(70));
  testCase3_GarantiaEstatal();
  
  console.log('='.repeat(70));
  console.log('TODOS LOS CASOS DE PRUEBA COMPLETADOS');
  console.log('='.repeat(70) + '\n');
};

// Para ejecutar en consola del navegador:
// import { runAllTests } from '@/tests/mortgageCalculator.test';
// runAllTests();

