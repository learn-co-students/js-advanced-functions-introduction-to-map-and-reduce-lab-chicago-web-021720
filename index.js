const mapToNegativize = (sourceArray) => {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i ++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

const mapToNoChange = (sourceArray) => {
    return sourceArray
}

const mapToDouble = (sourceArray) => {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i ++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray    
}


const mapToSquare = (sourceArray) => {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i ++) {
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray  
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    for (let i = 0; i < sourceArray.length; i ++) {
        startingPoint += sourceArray[i]
    }
    return startingPoint
}

const reduceToAllTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i ++) {
        if ( sourceArray[i] == false ){
            return false 
        }
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i ++) {
        if ( sourceArray[i] == true ){
            return true 
        }
    }
    return false
}
