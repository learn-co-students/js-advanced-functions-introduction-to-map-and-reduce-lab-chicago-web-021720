const mapToNegativize = (sourceArray) => {
    let newArray = []
    for(const item of sourceArray) {
        newArray.push(item * -1)
    }
    return newArray
}

const mapToNoChange = (sourceArray) => {
    return [...sourceArray]
}

const mapToDouble = (sourceArray) => {
    let newArray = []
    for(const item of sourceArray) {
        newArray.push(item * 2)
    }
    return newArray
}

const mapToSquare = (sourceArray) => {
    let newArray = []
    for(const item of sourceArray) {
        newArray.push(item ** 2)
    }
    return newArray
}


const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let total = startingPoint
    for(const item of sourceArray) {
        total += item
    }
    return total
}

const reduceToAllTrue = (sourceArray) => {
    for(const item of sourceArray) {
        if(!!item === false) {
            return false
        }
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for(const item of sourceArray) {
        if (!!item === true) {
            return true
        }
    }
    return false
}
