/**
 * Create {@link https://maskito.dev/core-concepts/mask-expression pattern mask expression} for phone number
 *
 * @example
 * tuiCreatePhoneMaskExpression('+1', '(###) ###-####');
 */
export function tuiCreatePhoneMaskExpression(countryCode, phoneMaskAfterCountryCode) {
  return [
    ...countryCode.split(''),
    ' ',
    ...phoneMaskAfterCountryCode
      .replaceAll(/[^#\- ()]+/g, '')
      .split('')
      .map((item) => (item === '#' ? /\d/ : item)),
  ];
}
