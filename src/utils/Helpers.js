export const formatValue = (value) => {
    if (value === "-" || isNaN(parseFloat(value))) {
      return { formattedValue: value, colorClass: "text-muted" };
    }
  
    const numberValue = parseFloat(value);
  
    const formattedValue = Math.abs(numberValue).toLocaleString('de-DE', {  minimumFractionDigits: numberValue % 1 === 0 ? 0 : 2 , maximumFractionDigits: 2 });
    const colorClass = numberValue < 0 ? 'text-danger' : 'text-muted';
    const suceesClass = numberValue > 0 ? 'text-success' : 'text-danger';
    return { formattedValue, colorClass , suceesClass };
  };
  