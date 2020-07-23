export function vh() {
    return window.innerHeight
}
export function vw() {
    return window.innerWidth
}
export function vmax() {
    return (vh() > vw()) ? vh() : vw()
}
export function vmin() {
    return (vh() < vw()) ? vh() : vw()
}