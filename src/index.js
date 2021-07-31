const fetch = require('node-fetch')

export const sum = (a, b) => {
    return a + b
}

export const converter = (a) => {
    return a * 1,6
}

export const jsonExample = {
    a: true,
    b: undefined,
    c: 'Hola Manu',
}

export const average = (array) => {
    if (array === undefined) {
        return 0
    }

    if (array.length > 0) {
        const sum = array.reduce((a, b) => a + b)
        return sum / array.length
    }

    return 0
}

export const api = async (id) => {
    const req = await fetch(`https://pokeapi.co/api/v2/berry/${id}/`)
        .then(res => res.json)

    return req
}
