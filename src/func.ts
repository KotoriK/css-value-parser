import { parsePureCSSValue } from "./parse"

const FunctionMap = {
    max: (...args: string[]) => {
        const parsedArgs = args.map(arg => parsePureCSSValue(arg))
        return Math.max(...parsedArgs)
    },
    min: (...args: string[]) => {
        const parsedArgs = args.map(arg => parsePureCSSValue(arg))
        return Math.min(...parsedArgs)
    }
}
export default function exec(funcName: string, args: string[]) {
    const func = FunctionMap[funcName]
    if (func) {
        return func(...args)
    } else {
        throw new TypeError('unsupported css function: ' + funcName)
    }
}