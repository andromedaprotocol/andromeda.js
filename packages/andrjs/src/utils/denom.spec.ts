import { convertMicroToMacro, convertMacroToMicro, formatAmountToInternational, DENOM_EXPONENTS } from './denom';

describe('Denom Utility Functions', () => {
    test('converts micro to macro correctly', () => {
        expect(convertMicroToMacro('1000000', 'u')).toBe('1.0');
        expect(convertMicroToMacro('1000000', 6)).toBe('1.0');
        expect(convertMicroToMacro('500000', 'm')).toBe('500.0');
        expect(convertMicroToMacro('1234567.89', 'u')).toBe('1.23456789');
        expect(convertMicroToMacro('1000000.123456', 'm')).toBe('1000.000123456');
        expect(convertMicroToMacro('1', 'u')).toBe('0.000001');
        expect(convertMicroToMacro('0', 'u')).toBe('0.0');
        expect(convertMicroToMacro('0.0', 'u')).toBe('0.0');
    });

    test('converts macro to micro correctly', () => {
        expect(convertMacroToMicro('1.000000', 'u')).toBe('1000000');
        expect(convertMacroToMicro('1.000000', 6)).toBe('1000000');
        expect(convertMacroToMicro('0.500000', 'm')).toBe('500');
        expect(convertMacroToMicro('1.23456789', 'u')).toBe('1234567.89');
        expect(convertMacroToMicro('1000.000123456', 'm')).toBe('1000000.123456');
        expect(convertMacroToMicro('1', 'u')).toBe('1000000');
        expect(convertMacroToMicro('0', 'u')).toBe('0');
        expect(convertMacroToMicro('0.0', 'u')).toBe('0');
    });

    test('formatAmountToInternational formats numbers correctly', () => {
        expect(formatAmountToInternational(1234567.89, 2)).toBe('1,234,567.89');
        expect(formatAmountToInternational(1000, 0)).toBe('1,000');
        expect(formatAmountToInternational(1234.5678, 3)).toBe('1,234.567');
    });

    test('DENOM_EXPONENTS contains correct values', () => {
        expect(DENOM_EXPONENTS).toEqual({
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
        });
    });
});
