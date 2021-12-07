import { parseCSSValue } from '../src/index'
test('max()', () => {
    expect(parseCSSValue('max(100px,200px)')).toBe(200)
})
test('min()', () => {
    expect(parseCSSValue('min(100px,200px)')).toBe(100)
})