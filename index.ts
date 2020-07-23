export function vh(percent:number) {
    return window.innerHeight*percent
}
export function vw(percent:number) {
    return window.innerWidth*percent
}
export function vmax(percent:number) {
    return Math.max(vh(percent),vw(percent))
}
export function vmin(percent:number) {
    return Math.min(vh(percent),vw(percent))}