import exec from './func'
import { parsePureCSSValue } from './parse'

export { parsePureCSSValue }
export function parseCSSValue(cssValue: string) {
    const hasFunction = cssValue.match(/^(\w+)\((.+)\)/)
    if (hasFunction) {
        const funcName = hasFunction[1]
        const funcArgs = hasFunction[2].split(',')
        return exec(funcName, funcArgs)
    } else {
        return parsePureCSSValue(cssValue)
    }
}