import { api } from '../index'

describe('api test', () => {
    test('res to be defined', async () => {
        const val = await api(1)
        expect(val).toBeDefined()
    })
})