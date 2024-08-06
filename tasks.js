// задание 7.6.1
function isPalindrome(word) {
    
    let secondWord = word.toLowerCase().replace(/\s/g, '');
    
    
    if (secondWord === secondWord.split('').reverse().join('')) {
        console.log(`Слово ${word} является палиндромом`);
    } else {
        console.log(`Слово ${word} не является палиндромом`);
    }
}


isPalindrome('Довод');        
isPalindrome('Сантимент');    
isPalindrome('А роза упала на лапу Азора'); 


// задание 7.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', "don't", 'know', 'that', 'we', 'know', 'that', 'they', 'know'];


const newArr = [...new Set(arr)];


console.log(newArr);


// задание 7.6.3
const userInput = prompt("Введите число:");


const num = Number(userInput);


const result = [];
for (let i = 0; i <= num; i++) {
    resultArray.push(i);
}


console.log(result);


// задание 7.6.4
const line1 = 'x o x';
const line2 = 'o x o';
const line3 = 'x o x';


console.log(line1);
console.log(line2);
console.log(line3);


// задание 7.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};


const arrValues = [];


for (let key in obj) {
    if (Array.isArray(obj[key])) {
        arrValues.push(...obj[key]);
    } else {
        arrValues.push(obj[key]);
    }
}

console.log(arrValues);
