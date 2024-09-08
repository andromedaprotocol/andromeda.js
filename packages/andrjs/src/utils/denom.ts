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

/**
 * Converts an amount from micro (smallest) units to macro (human-readable) units.
 * 
 * @param {string} amount - The amount in micro units as a string.
 * @param {UNITS} unit - The unit to convert to, either a key from DENOM_EXPONENTS or a number.
 * @returns {string} The converted amount in macro units as a string.
 * 
 * @example
 * convertMicroToMacro('1000000', 'u') // returns '1.000000'
 * convertMicroToMacro('1000000', 6) // returns '1.000000'
 */

export const convertMicroToMacro = (amount: string, unit: UNITS) => {
    const [realAmount, ...subDecimals] = amount.split('.');
    amount = realAmount;
    let numZeroes = typeof unit === 'number' ? unit : DENOM_EXPONENTS[unit];
    amount = amount.padStart(numZeroes + 1, '0');
    const fixed = amount.substring(0, amount.length - numZeroes);
    const decimals = (amount.substring(amount.length - numZeroes)).replace(/0+$/, '').padEnd(1, '0');
    return fixed.concat('.').concat(decimals).concat(subDecimals.join());
}

/**
 * Converts an amount from macro (human-readable) units to micro (smallest) units.
 * 
 * @param {string} amount - The amount in macro units as a string.
 * @param {UNITS} unit - The unit to convert from, either a key from DENOM_EXPONENTS or a number.
 * @returns {string} The converted amount in micro units as a string.
 * 
 * @example
 * convertMacroToMicro('1.000000', 'u') // returns '1000000'
 * convertMacroToMicro('1.000000', 6) // returns '1000000'
 */
export const convertMacroToMicro = (amount: string, unit: UNITS) => {
    const numZeroes = typeof unit === 'number' ? unit : DENOM_EXPONENTS[unit];
    let [result, decimals = ''] = amount.split('.');
    decimals = decimals.substring(0, numZeroes).padEnd(numZeroes, '0');
    return result.concat(decimals).replace(/^0+/, '');
}

/**
 * Formats a numeric value to an internationalized string representation.
 * 
 * @param {string | number} value - The value to format.
 * @param {number} [decimals] - The number of decimal places to include.
 * @returns {string} The formatted amount as an internationalized string.
 * 
 * @example
 * formatAmountToInternational(1234567.89, 2) // returns '1,234,567.89'
 */
export const formatAmountToInternational = (value: string | number, decimals?: number) => {
    value = value.toString();
    const [whole, ...decimal] = value.split('.');
    let result = Intl.NumberFormat('en-US').format(BigInt(whole));
    if (decimal.join('.') !== '') {
        result = result.concat('.', decimal.join('.').substring(0, decimals));
    }
    return result;
}

/**
 * Compares two string representations of numbers.
 * 
 * @param {string} a - The first number as a string.
 * @param {string} b - The second number as a string.
 * @param {number} [asc=1] - The sort order: 1 for ascending, -1 for descending.
 * @returns {number} -1 if a < b, 1 if a > b, 0 if a === b, multiplied by asc.
 * 
 * @example
 * compareStringNumber('10', '2') // returns 1
 * compareStringNumber('10', '2', -1) // returns -1
 */
export const compareStringNumber = (a: string, b: string, asc = 1) => {
    const len = Math.max(a.length, b.length);
    a = a.padStart(len, '0');
    b = b.padStart(len, '0');
    return a > b ? asc * 1 : a < b ? -1 * asc : 0;
}

export interface UnitConfig {
    units: UNITS;
    microDenom: string;
    macroDenom: string;
}

/**
 * Determines the unit configuration for a given denomination.
 * 
 * @param {string} denom - The denomination to get the configuration for.
 * @returns {UnitConfig} An object containing the units, microDenom, and macroDenom.
 * 
 * @example
 * getUnitsConfigFromDenom('inj') // returns { units: 18, microDenom: 'inj', macroDenom: 'inj' }
 * getUnitsConfigFromDenom('uatom') // returns { units: 6, microDenom: 'uatom', macroDenom: 'ATOM' }
 */
export const getUnitsConfigFromDenom = (denom: string): UnitConfig => {
    if (denom === 'inj') {
        return {
            units: DENOM_EXPONENTS.a,
            microDenom: denom,
            macroDenom: denom
        }
    }
    return {
        microDenom: denom,
        macroDenom: denom.substring(1).toUpperCase(),
        units: DENOM_EXPONENTS[denom[0] as keyof typeof DENOM_EXPONENTS] ?? DENOM_EXPONENTS.u
    }
}