// console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01 ==================================================================================================================================================================================================
// Task 01 ==================================================================================================================================================================================================
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(num: number) {
    return function (num2: number) {
        return num + num2
    }
}
// console.log(sum(3)(6))



// Task 02 ==================================================================================================================================================================================================
// Task 02 ==================================================================================================================================================================================================
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
function makeCounter() {
    let count: number = 0;
    return function() {
        return count += 1
    }
}
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// const counter2 = makeCounter();
// console.log(counter2());
// console.log(counter());



// Task 03 ==================================================================================================================================================================================================
// Task 03 ==================================================================================================================================================================================================
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
function makeCounter2(start: number) {
    return {
        increase() { return start += 1},
        decrease() { return start -= 1},
        reset() { return start = 0},
        set(newNum: number) { return start = newNum},
    }
}
// const counter3 = makeCounter2(3)
// console.log(counter3.increase())
// console.log(counter3.reset())
// console.log(counter3.set(12))
// console.log(counter3.decrease())



// Task 04* ==================================================================================================================================================================================================
// Task 04* ==================================================================================================================================================================================================
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
function superSum(num: number) {
    if (num <= 0) return 0
    if (num === 1) return (oneNum: number) => oneNum

    let _arguments: number[] = []

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args]
        if (_arguments.length >= num) {
            _arguments.length = num
            return _arguments.reduce((acc, val) => acc + val)
        } else {
            return helper
        }
    }
    return helper
}
// //@ts-ignore
// console.log(superSum(0))
// //@ts-ignore
// console.log(superSum(3)(2)(5)(3) )
// //@ts-ignore
// console.log(superSum(3)(2)(5,3) )
// //@ts-ignore
// console.log(superSum(3)(2,5,3) )
// //@ts-ignore
// console.log(superSum(3)(2,5)(3) )
// //@ts-ignore
// console.log(superSum(3)(2,5)(3,9) )



// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05 ==================================================================================================================================================================================================
// Task 05 ==================================================================================================================================================================================================
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//LearnJs task 1 __________________________________________________________________________________
function sumTo(n: number) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sumToRec(n: number) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}
function sumToFormula(n: number) {
    return n * (n + 1) / 2;
}
// console.log(sumTo(100), sumToRec(100), sumToFormula(100))


//LearnJs task 2 __________________________________________________________________________________
function factorial(n: number): any {
    return n <= 1 ? n : n * factorial(n - 1)
}
// console.log(factorial(3))


//LearnJs task 3 __________________________________________________________________________________
function fibBad(n: number): any {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}
function fib(n: number) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
// console.log(fib(77))


//LearnJS task 4 __________________________________________________________________________________
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list: any) {
    //Loop
    // let temporary = list
    // while(temporary) {
    //     console.log(temporary.value)
    //     temporary = temporary.next
    // }

    //Recursion
    if (list.value) console.log(list.value)
    if (list.next !== null) printList(list.next)
}
// printList(list)

function printListRev(list: any) {
    //Loop
    // let arr = [];
    // let tmp = list;
    // while (tmp) {
    //     arr.push(tmp.value);
    //     tmp = tmp.next;
    // }
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     console.log( arr[i] );
    // }

    //Recursion
    if (list.next !== null) printListRev(list.next)
    if (list.value) console.log(list.value)
}
// printListRev(list)



// Task 06 ==================================================================================================================================================================================================
// Task 06 ==================================================================================================================================================================================================
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
let arr1 = [1,2,3,[1,2,3,4, [2,3,4]]]
function flat(arr: any[]): any {
    if (!Array.isArray(arr)) return 'Argument should be an array!';
    return arr.reduce((acc, val) => {

        return acc.concat(Array.isArray(val) ? flat(val) : val)
    }, [])
}
// console.log(flat(arr1))

// just a plug
export default () => {};