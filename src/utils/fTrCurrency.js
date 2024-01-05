export const formatTrCurrency = (value) => {
    const formattedValue = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    
      return formattedValue;
}

export const fTrCurrency = (value) =>
  value.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
