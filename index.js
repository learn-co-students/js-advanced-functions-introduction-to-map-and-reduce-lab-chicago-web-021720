// map-like functions
const mapToNegativize = (arr) => {
    const newArr = []
    arr.forEach(element => newArr.push(element * -1))
    return newArr
}

const mapToNoChange = (arr) => {
    const newArr = []
    arr.forEach(element => newArr.push(element))
    return newArr
}

const mapToDouble = (arr) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }    
    return newArr
}

const mapToSquare = (arr) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** 2)
    }    
    return newArr
}


// reduce-like functions

const reduceToTotal = (arr, startingPoint = 0) => {
    for (let i = 0; i < arr.length; i++) {
        startingPoint += arr[i]
    }
    return startingPoint
}

const reduceToAllTrue = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return false
        }
    }
    return true
}

const reduceToAnyTrue = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            return true
        }
    }
    return false
}
