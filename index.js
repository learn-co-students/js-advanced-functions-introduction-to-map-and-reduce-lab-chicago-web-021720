// Your code here

function mapToNegativize(sourceArray) {
    const newArr = [];
    sourceArray.forEach(e => newArr.push(e * -1));
    return newArr;
}

function mapToNoChange(sourceArray) {
    const newArr = [];
    sourceArray.forEach(e => newArr.push(e));
    return newArr;
}

function mapToDouble(sourceArray) {
    const newArr = [];
    sourceArray.forEach(e => newArr.push(e * 2));
    return newArr;
}

function mapToSquare(sourceArray) {
    const newArr = [];
    sourceArray.forEach(e => newArr.push(e ** 2));
    return newArr;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(e => startingPoint += e);
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    if (sourceArray.find(s => !s) === false) {
        return false;
    } else {
        return true;
    }
}

function reduceToAnyTrue(sourceArray) {
    if (sourceArray.find(s => s)) {
        return true;
    } else {
        return false;
    }
}