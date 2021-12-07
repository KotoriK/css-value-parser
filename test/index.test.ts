import { parseCSSValue } from '../src/index'
test('max()', () => {
    expect(parseCSSValue('max(100px,200px)')).toBe(200)
})
test('min()', () => {
    expect(parseCSSValue('min(100px,200px)')).toBe(100)
})
test('vh', () => {
    //@ts-ignore
    globalThis.window = { innerHeight: 1000 }
    expect(parseCSSValue('20vh')).toBe(1000 * 0.2)
})