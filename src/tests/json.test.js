import { jsonExample } from "../index"

describe('json test', () => {
    test('c to be a string', () => {
        const val = jsonExample.c
        expect(val).toContain('Hola')
    })

    test('a to be true', () => {
        const val = jsonExample.a
        expect(val).toBeTruthy()
    })

    test('b to be false', () => {
        const val = jsonExample.b
        expect(val).toBeFalsy()
    })
})