// 1. Функция которая принимает n и выводит в консоль квадрат n x n .

 function getSquare(number) {
    let star = "";

    for (let i = 0; i < number; i++) {
        for (let k = 0; k < number; k++) {
            star += "*";  
        } 
        star += `\n`;
    }

    return star;
}
 console.log(getSquare(5));


//  3 . Функция которая принимает n и выводит в консоль треугольник n x n 

function getTriangle(number) {
    let star = "";

    for (let i = 0; i < number; i++) {
        for (let k = 0; k < number; k++) {
            if (k + i < number) {
            star += "*";  
            }
        }
        star += `\n`;
    } 

    return star;
} 
console.log(getTriangle(5));


// 2. Функция которая принимает n и выводит в консоль пустой квадрат n x n 

 function getEmptySquare(number) {
    let star = "";

    for (let i = 0; i < number; i++) {
        for (let k = 0; k < number; k++) {
            if(i === 0 || i === number - 1 || k === 0 || k === number - 1) {
            star += "*";
            } else star += " ";
        } 
        star += `\n`;
    } 

    return star;
}
 console.log(getEmptySquare(5));

// 4. Функция которая принимает n и выводит в консоль пустой треугольник n x n .

function getEmptyTriangle(number) {
    let star = "";

    for (let i = 0; i <number; i++) {
        for (let k = 0; k < number; k++) {
            if (i === 0 || k === 0 || i + k === number -1 ) {
                star += "*";
            } else star += " ";
        } 
        star += `\n`;
    } 
    
    return star;
}

console.log(getEmptyTriangle(5));


// 5. Функция которая принимает n и выводит в консоль  пустые песочные часы n x n .

function getEmptyHourGlass(number) {
    let star = "";

    for (let i = 0; i < number; i++) {
        for (let k = 0; k < number; k++) {
            if (i === 0  || i === k || i === number - 1 || i + k === number - 1) {
            star += "*";
        } else star += " ";
        }
        star += `\n`;
    }

    return star;
}
 console.log(getEmptyHourGlass(6));

// 6. функция которая принимает n и выводит в консоль песочные часы n x n.

function getHourGlass(number) {
        let star = "";
    
        for (let i = 0; i < number; i++) {
            for (let k = 0; k < number; k++) {
                if (i === 0 || i === k || i === number - 1  || k + i === number - 1 || i <= k && i < number - k || i >= k && i >= number - k) {
                star += "*";
                } else star += " ";
            }
        star += `\n`;
        }
    
        return star;
    }
     console.log(getHourGlass(7));

   