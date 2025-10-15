# Simulador de Crédito Habitacional Portugal 2025

## 📋 Descripción General

Simulador completo de crédito hipotecario para Portugal que cumple con todas las regulaciones vigentes de 2025, incluyendo:
- **Decreto-Lei n.º 74-A/2017** (transposición Directiva 2014/17/UE)
- **Recomendación Banco de Portugal 2022** (límites de plazo según edad)
- **Garantía Estatal Jóvenes 2024** (hasta 15% para ≤35 años)

## 🎯 Funcionalidades Principales

### Cálculos Implementados
- ✅ **Cuota Mensual** (sistema francés de amortización)
- ✅ **MTIC** (Montante Total Imputado ao Consumidor)
- ✅ **TAEG** (Taxa Anual de Encargos Efectiva Global / APR)
- ✅ **Cronograma de Amortización** completo
- ✅ **Validaciones regulatorias** automáticas

### Modalidades de Tasa
1. **Tasa Fija**: Tasa constante durante todo el plazo
2. **Tasa Variable**: Indexada a Euribor (3M/6M/12M) + spread
3. **Tasa Mista**: Período inicial fijo, luego variable

### Validaciones Regulatorias

#### Plazo Máximo según Edad (Recomendación Banco de Portugal 2022)
- Edad ≤30 años → Máximo 40 años
- Edad >30 y ≤35 años → Máximo 37 años
- Edad >35 años → Máximo 35 años

#### Financiamiento Máximo
- **General**: 80% del menor entre precio y tasación
- **Con garantía mejorada**: 90%
- **Jóvenes (≤35 años, 1ª vivienda)**: Hasta 100% con garantía estatal

#### Garantía Estatal para Jóvenes
- Edad máxima: 35 años
- Solo primera vivienda propia permanente
- Garantía estatal: Hasta 15% del capital
- Permite financiamiento al 100%

## 📁 Estructura de Archivos

```
src/
├── data/
│   └── mortgageRates.json           # Tasas actualizables (Euribor, spreads, límites)
├── utils/
│   └── mortgageCalculator.ts        # Lógica de cálculo principal
├── components/
│   ├── MortgageSimulator.tsx        # Componente principal
│   └── mortgage/
│       ├── MortgageFormInputs.tsx   # Formulario de entrada
│       └── MortgageResults.tsx      # Visualización de resultados
├── i18n/locales/
│   ├── es.json                      # Traducciones español
│   └── en.json                      # Traducciones inglés
└── tests/
    └── mortgageCalculator.test.ts   # Casos de prueba
```

## 🧮 Fórmulas Implementadas

### Cuota Mensual (Sistema Francés)
```
P = C × [i × (1 + i)^n] / [(1 + i)^n - 1]

Donde:
P = Cuota mensual
C = Capital financiado
i = Tasa mensual (tasa anual / 12 / 100)
n = Número de meses
```

### MTIC (Montante Total Imputado ao Consumidor)
```
MTIC = Σ Cuotas + Comisión Apertura + Seguros Totales
```

### TAEG (Tasa Anual de Encargos Efectiva Global)
Se calcula mediante el método de TIR (Tasa Interna de Retorno):
```
Desembolso Neto = Σ [Flujos / (1 + TAEG/12)^t]

Donde:
- Desembolso Neto = Capital - Comisión Apertura
- Flujos = Cuota + Seguros mensuales
- Se resuelve iterativamente (método Newton-Raphson)
```

## 🔧 Datos Configurables (mortgageRates.json)

### Tasas Euribor Actuales (2025)
- **Euribor 3M**: 2.5%
- **Euribor 6M**: 2.65%
- **Euribor 12M**: 2.8%

### Spreads Bancarios
- Mínimo: 0.5%
- Medio: 1.2%
- Máximo: 2.5%

### Tasas Fijas por Plazo
- 10 años: 3.5%
- 15 años: 3.75%
- 20 años: 4.0%
- 25 años: 4.25%
- 30 años: 4.5%
- 35 años: 4.75%
- 40 años: 5.0%

### Comisiones
- Apertura: 0% - 1.5% del capital
- Amortización anticipada:
  - Tasa fija: 2%
  - Tasa variable: 0.5%

### Seguros Anuales (estimados)
- Vida: 0.15% del capital
- Multirriesgos: 0.10% del capital

## 🧪 Casos de Prueba

### Caso 1: Tasa Fija - Cliente Estándar
```typescript
{
  valorImovel: 300000,
  entrada: 60000 (20%),
  prazoAnos: 30,
  modalidade: 'fija',
  taxaFija: 4.0%,
  edad: 40,
  primeiraHabitacao: false
}
```
**Resultado esperado**:
- Capital: €240,000
- Cuota mensual: ~€1,146
- Plazo válido: ✅ (35 años máx para >35 años)

### Caso 2: Tasa Variable - Euribor + Spread
```typescript
{
  valorImovel: 250000,
  entrada: 50000 (20%),
  prazoAnos: 25,
  modalidade: 'variable',
  indexacao: 'Euribor12m' (2.8%),
  spread: 1.2%,
  edad: 32,
  primeiraHabitacao: false
}
```
**Resultado esperado**:
- Capital: €200,000
- Tasa: 4.0% (2.8% + 1.2%)
- Cuota mensual: ~€1,056

### Caso 3: Garantía Estatal - Joven Primera Vivienda
```typescript
{
  valorImovel: 200000,
  entrada: 0 (0% - 100% financiamiento),
  prazoAnos: 35,
  modalidade: 'mista',
  taxaFija: 3.5% (5 años),
  luego variable: Euribor12m + 1.0%,
  edad: 30,
  primeiraHabitacao: true
}
```
**Resultado esperado**:
- Capital: €200,000 (100%)
- Garantía estatal: ✅ Hasta €30,000 (15%)
- Plazo válido: ✅ (40 años máx para ≤30 años)
- Financiamiento válido: ✅ (100% permitido)

## 🌐 Internacionalización

El simulador está completamente traducido a:
- 🇪🇸 **Español** (es.json)
- 🇬🇧 **Inglés** (en.json)

Todas las etiquetas, mensajes de error y explicaciones están disponibles en ambos idiomas.

## 📊 Interfaz de Usuario

### Tabs
1. **Calculadora**: Formulario de entrada de datos
2. **Resultados**: Visualización de cálculos y validaciones

### Secciones del Formulario
1. **Datos del Inmueble**
   - Valor del inmueble
   - Valor de tasación (opcional)
   - Entrada
   - Plazo en años

2. **Condiciones del Crédito**
   - Tipo de tasa (fija/variable/mista)
   - Tasa fija / Indexación Euribor
   - Spread
   - Años con tasa fija (solo mista)

3. **Comisiones y Seguros**
   - Comisión de apertura (%)
   - Seguros anuales (€)

4. **Datos del Comprador**
   - Edad
   - Primera vivienda (checkbox)

### Visualización de Resultados
- 💰 **Cuota Mensual** (destacada)
- 📈 **Capital Financiado e Interés**
- 💵 **Costes Totales** (Intereses, MTIC, TAEG)
- ✅ **Validaciones** (plazo, financiamiento, garantía)
- 📋 **Cuadro de Amortización** (expandible)
- ℹ️ **Explicaciones** educativas

## 🔄 Actualización de Datos

Para actualizar tasas Euribor, spreads o límites:

1. Editar `/src/data/mortgageRates.json`
2. Modificar valores según mercado actual
3. El simulador recalcula automáticamente

Ejemplo:
```json
{
  "euribor": {
    "12m": 2.8  // Actualizar según Banco de Portugal
  },
  "spreads": {
    "medio": 1.2  // Actualizar según ofertas mercado
  }
}
```

## 🚀 Ejecución de Tests

### En consola del navegador:
```javascript
import { runAllTests } from '@/tests/mortgageCalculator.test';
runAllTests();
```

### Verificaciones automáticas:
- ✅ Capital financiado correcto
- ✅ Tasas nominales calculadas
- ✅ Validaciones según edad
- ✅ Garantía estatal aplicable
- ✅ Límites de financiamiento

## 📚 Referencias Legales

1. **Decreto-Lei n.º 74-A/2017**
   - Transpone Directiva 2014/17/UE
   - Contratos de crédito con garantía hipotecaria
   - [Diário da República](https://diariodarepublica.pt)

2. **Recomendación Banco de Portugal (2022)**
   - Límites de plazo según edad
   - [Portal do Cliente Bancário](https://clientebancario.bportugal.pt)

3. **Garantía Estatal Jóvenes (2024)**
   - Decreto-ley garantía personal estatal
   - 15% capital para ≤35 años
   - [Diário da República](https://diariodarepublica.pt)

## ⚠️ Disclaimer

Los valores calculados son **orientativos**. Siempre se debe consultar con un profesional financiero para una evaluación precisa y personalizada.

El simulador implementa las reglas conocidas a la fecha, pero las condiciones específicas pueden variar entre entidades bancarias.

---

**Desarrollado por**: Benjamín Valdivia  
**Tecnologías**: React + TypeScript + TailwindCSS + i18next  
**Última actualización**: 2025

