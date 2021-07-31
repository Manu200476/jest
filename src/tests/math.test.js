import { sum, converter, average } from '../index'

describe('math tests', () => {
    test('expected 2 plus 1 to be 3', () => {
        const val = sum(1, 2)
        expect(val).toBe(3)
    })

    test('expected that 100 mph is lower than 180 kpm', () => {
        const val = converter(100)
        expect(val).toBeLessThan(150)
    })

    test('Avg of [1, 2, 3] to be 2', () => {
        const val = average([1, 2, 3])
        expect(val).toBe(2)
    })

    test('Avg of [] to be 0', () => {
        const val = average([])
        expect(val).toBe(0)
    })

    test('Avg of Undefined to be 0', () => {
        const val = average(undefined)
        expect(val).toBe(0)
    })
})