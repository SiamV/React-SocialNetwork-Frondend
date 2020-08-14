export const requiredField = value => {
    if (value) return undefined;
    return 'Field is required'
}

export const maxLengthCreator = (maxLength) => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const maxLength50 = value => {
    if (value.length > 50) return `Max length is 50 symbols`;
    return undefined;
}