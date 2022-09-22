
export function firstElement(data) {
    return data[0];
}

export function allElementsExceptTheLastOne(data) {
    let d = [];
    for (let i = 0; i < (data.length - 1); i++) {
        d[i] = data[i];
    }
    return d;
}

export function LastElement(data) {
    return data[data.length - 1];
}

export function allElementsExceptTheFirstOne(data) {
    let d = [];
    for (let i = 1; i < (data.length); i++) {
        d[i - 1] = data[i];
    }
    return d;
}

export function elementInPosition(position, data) {
    //if n is negative or greater than the length of the array return the last element
    if ((position < 0) || position > data.length) {
        return data[data.length - 1];
    } else {
        return data[position];
    }

}

// https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
//var ary = ['three', 'seven', 'eleven'];

//removeA(ary, 'seven');
export function deleteArrayByValue(data, elementValue) {
    return removeA(data, elementValue);
}

//https://bobbyhadz.com/blog/javascript-remove-duplicates-from-array

export function removeDuplicatesFromArray(data) {
    const unique = [];

    data.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;

}
