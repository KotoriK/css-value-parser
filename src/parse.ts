import { parseUnit } from "./unit"

export function parsePureCSSValue(cssValue: string) {
    const matches = cssValue.match(/^(\d+)(\w+)$/)
    if (matches) {
        const [_, value, unit] = matches
        return parseUnit(value, unit)
    } else {
        return cssValue
    }
}
