function TablePlentry(num) {
    const massifPlentry = NumArray(num);
    let numPlentry = [];
    let lastMassif = [];
    const tableNum = TableNumCreate(massifPlentry);
    lastString = tableNum[tableNum.length - 1].map(item => item.toString().length);
    firstColumnWidth = massifPlentry[massifPlentry.length - 1].toString().length;


    const createBar = (arr, index) => {

        let newArr = []

        for (i = 0; i < arr.length; i++) {
            newArr.push(arr[i].toString().padStart(lastString[i]))
        }

        lastMassif.push(massifPlentry[index].toString().padStart(firstColumnWidth) + '|' + newArr.join(' ') + '\n')


    }

    for (let i = 0; i < tableNum.length; i++) {

        createBar(tableNum[i], i)
    }

    for (let i = 0; i < massifPlentry.length; i++) {

        numPlentry.push(massifPlentry[i].toString().padStart(lastString[i]))
    }

    const dashs = numPlentry.join(" ").replace(/\d| |\W+n/g, "-");

    let titleStringLength = numPlentry.join(" ").length + firstColumnWidth + 1

    const finaliArray = [numPlentry.join(" ").padStart(titleStringLength) + '\n', dashs.padStart(titleStringLength) + '\n'];

    console.group("Первое задание");
    console.log(finaliArray.concat(lastMassif).join(''));
    console.groupEnd();
}

function NumArray(num) {
    return Array(num).fill().map((e, i) => i + 1);
}


function TableNumCreate(massifPlentry) {
    const newArray = [];
    for (let i = 1; i <= massifPlentry.length; i++) {
        newArray.push(massifPlentry.map((item) => item * i));
    }
    return newArray;
}


TablePlentry(10);