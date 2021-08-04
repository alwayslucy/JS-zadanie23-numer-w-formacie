const convertNumber = (arr) => {
    let newArr1 = arr.slice(0, 3);
    let newArr2 = arr.slice(3, 6);
    let newArr3 = arr.slice(6, 9);

    let number1 = newArr1.join('');
    let number2 = newArr2.join('');
    let number3 = newArr3.join('');

    let convertNumber = (number1 + '-' + number2 + '-' + number3);

    return convertNumber;
}

console.log(convertNumber([8, 2, 1, 6, 2, 7, 9, 8, 1]));