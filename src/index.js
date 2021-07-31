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
