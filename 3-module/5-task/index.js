function getMinMax(str) {

    let numbers = str
        .split(' ')
        .map(item => parseFloat(item))
        .filter(item => !isNaN(item))

    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return {min, max};
}
