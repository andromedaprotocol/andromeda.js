export const DENOM_EXPONENTS = {
    'd': 1,
    'c': 2,
    'm': 3,
    'u': 6,
    'n': 9,
    'p': 12,
    'f': 15,
    'a': 18,
    'z': 21,
    'y': 24,
} as const;

export type UNITS = keyof typeof DENOM_EXPONENTS | number;

export const convertMicroToMacro = (amount: string, unit: UNITS) => {
    const [realAmount, ...subDecimals] = amount.split('.');
    amount = realAmount;
    let numZeroes = typeof unit === 'number' ? unit : DENOM_EXPONENTS[unit];
    amount = amount.padStart(numZeroes + 1, '0');
    const fixed = amount.substring(0, amount.length - numZeroes);
    const decimals = (amount.substring(amount.length - numZeroes)).replace(/0+$/, '').padEnd(1, '0');
    return fixed.concat('.').concat(decimals).concat(subDecimals.join());
}
export const convertMacroToMicro = (amount: string, unit: UNITS) => {
    let numZeroes = typeof unit === 'number' ? unit : DENOM_EXPONENTS[unit];
    let [result, decimals = ''] = amount.split('.');
    decimals = decimals.substring(0, numZeroes).padEnd(numZeroes, '0');
    return result.concat(decimals).replace(/^0+/, '');
}

export const formatAmountToInternational = (value: string | number, decimals?: number) => {
    value = value.toString();
    const [whole, ...decimal] = value.split('.');
    let result = Intl.NumberFormat('en-US').format(BigInt(whole));
    if (decimal.join('.') !== '') {
        result = result.concat('.', decimal.join('.').substring(0, decimals));
    }
    return result;
}

export const compareStringNumber = (a: string, b: string, asc = 1) => {
    const len = Math.max(a.length, b.length);
    a = a.padStart(len, '0');
    b = b.padStart(len, '0');
    return a > b ? asc * 1 : a < b ? -1 * asc : 0;
}