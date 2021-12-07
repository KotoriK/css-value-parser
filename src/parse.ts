import { parseUnit } from "./unit"

/**
 * Parse CSS Value to actual value in 'px'
 * @param cssValue 
 * @returns 
 */
export function parsePureCSSValue(cssValue: string): number {
    const matches = cssValue.match(/^(\d+)(\w+)$/)
    if (matches) {
        const [_, value, unit] = matches
        return parseUnit(value, unit)
    } else {
        return parseFloat(cssValue)
    }
}
