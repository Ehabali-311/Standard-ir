export const formatValue = (value) => {
    if (value === "-" || isNaN(parseFloat(value))) {
      return { formattedValue: value, colorClass: "text-dark" };
    }
  
    const numberValue = parseFloat(value);
  
    const formattedValue = Math.abs(numberValue).toLocaleString('de-DE', {  minimumFractionDigits: numberValue % 1 === 0 ? 0 : 2 , maximumFractionDigits: 2 });
    const colorClass = numberValue < 0 ? 'text-danger' : 'text-dark';
    const suceesClass = numberValue > 0 ? 'text-success' : 'text-danger';
    return { formattedValue, colorClass , suceesClass };
  };
  export const formatValueFinancial = (value) => {
    if (value === "-" || isNaN(value)) {
      return { formattedValue: value, colorClass: "text-dark" };
    }
    const numberValue = value;
    const formattedValue = Math.abs(numberValue).toLocaleString('de-DE', {  minimumFractionDigits:  2 , maximumFractionDigits: 3 });
    const colorClass = numberValue < 0 ? 'text-danger' : 'text-dark';
    const suceesClass = numberValue > 0 ? 'text-success' : 'text-danger';
    return { formattedValue, colorClass , suceesClass };
  };
  