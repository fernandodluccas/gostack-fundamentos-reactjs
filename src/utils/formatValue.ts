const formatValue = (value: number): string =>
  Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(
    value,
  ); // TODO

export default formatValue;
