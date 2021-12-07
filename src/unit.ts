function vh(percent: number) {
    return window.innerHeight * percent
}
function vw(percent: number) {
    return window.innerWidth * percent
}
function vmax(percent: number) {
    return Math.max(vh(percent), vw(percent))
}
function vmin(percent: number) {
    return Math.min(vh(percent), vw(percent))
}
const noop = (value) => value
const UnitMap = {
    vh,
    vw,
    vmax,
    vmin,
    px: noop
}
export function parseUnit(value: string, unit: string) {
    const func = UnitMap[unit]
    if (func) {
        return func[parseFloat(value)]
    } else {
        throw new TypeError('unsupport css unit: ' + unit)
    }
}