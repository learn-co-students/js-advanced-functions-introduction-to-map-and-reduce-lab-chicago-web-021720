function mapToNegativize(sourceArray) {
    let result = [];
    sourceArray.forEach(elm => {
        result.push(elm * -1)
    })
    return result
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    let result = [];
    sourceArray.forEach(elm => {
        result.push(elm * 2)
    })
    return result
}

function mapToSquare(sourceArray) {
    let result = [];
    sourceArray.forEach(elm => {
        result.push(elm ** 2)
    })
    return result
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let result = startingPoint;
    sourceArray.forEach(elm => {
        result += elm
    })
    return result
}

function reduceToAllTrue(sourceArray) {
    let result = true;
    sourceArray.forEach(elm => {
        if (!elm) {
            result = false
        }
    })
    return result
}

function reduceToAnyTrue(sourceArray) {
    let result = false;
    sourceArray.forEach(elm => {
        if (elm) {
            result = true
        }
    })
    return result
}
