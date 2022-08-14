function validMassif(arr) {
    const collatingMassif = arr.sort((a, b) => a - b);
    let formerRes = collatingMassif.map(String);
    let actRes = searchRemove(formerRes);

    while (!checkLenghtAndEmpty(actRes, formerRes)) {
        formerRes = actRes;
        actRes = searchRemove(actRes
            .map(el => Math.pow(el.split('').reverse().join(''), 2))
            .map(String)
        );
    }

    return actRes;
}


function checkLenghtAndEmpty(act, former) {
    return act.length === 1 || act.length === 0 || act.length === former.length;
}

function searchRemove(arr, result = []) {
    if (arr.length === 0) {
        return result;
    }

    const [number, ...numbers] = arr;

    for (let digit of number) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] && arr[i].includes(digit)) {
                arr[i] = false;
                if (arr[0]) {
                    arr[0] = false;
                }
            }
        }
    }

    const newArr = arr.filter(Boolean);

    if (newArr.length === arr.length) {
        result.push(number);
        return searchRemove(numbers, result);
    }

    return searchRemove(newArr, result);
}

console.group('Второе задание');
console.log(validMassif([41, 55, 61, 1, 8, 27, 37, 39]));
console.groupEnd();