function mapToNegativize(array) {
    const rez = []
    for (const elm of array) {
        rez.push(-elm)
    }
    return rez
}

function mapToNoChange(array) {
    const rez = []
    for (const elm of array) {
        rez.push(elm)
    }
    return rez
}

function mapToDouble(array) {
    const rez = []
    for (const elm of array) {
        rez.push(elm * 2)
    }
    return rez
}

function mapToSquare(array) {
    const rez = []
    for (const elm of array) {
        rez.push(elm ** 2)
    }
    return rez
}

function reduceToTotal(array, start = 0) {
    for (const elm of array) {
        start += elm
    }
    return start
}

function reduceToAllTrue(array) {
    for (const elm of array) {
        if (!elm) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array) {
    for (const elm of array) {
        if (elm) {
            return true
        }
    }
    return false
}