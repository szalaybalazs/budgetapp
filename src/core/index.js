export const numberToString = number => {
  return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumSignificantDigits: Math.abs(number).toString().length }).format(number);
}