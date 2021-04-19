
export const fixDate = (date, str = '0') => {
    return String(date).padStart(2, str)
}

export const maxStringLength = (str = '', max = 10) => {
    if (str && str.length > max) {
        str = str.split('').slice(0, max)
        str.push('...')
        str = str.join('')
    }

    return str
}
