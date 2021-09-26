// console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

const pr1 = new Promise(res => res(10))
const pr2 = new Promise(res => res(0))

// pr1.then((res: any) => {
//     console.log(res)
//     return res + 2
// }).then((res: any) => {
//     console.log(res)
//     return res + 2
// }).then((res: any) => {
//     console.log(res)
// })
// console.log('center')
// pr2.then((res: any) => {
//     console.log(res)
//     return res + 1
// }).then((res: any) => {
//     console.log(res)
//     return res + 1
// }).then((res: any) => {
//     console.log(res)
// })


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
new Promise( res => {
    // console.log('Promise is created')
})


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
new Promise( res => {
    res('Promise Data')
})
    // .then(console.log)


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
new Promise( (res, rej) => {
    rej('Promise Error')
})
    // .then(console.log)
    // .catch(console.log)


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
new Promise( (res, rej) => {
    setTimeout(() => res('Promise Data'), 3000)
})
    // .then(console.log)


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описанного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type handlePromiseType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const handlePromise: handlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        // console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        // console.log(`Promise is rejected with data: ${paramName}`)
    },
}

export const createPromise = () => {
    handlePromise.promise = new Promise( (resolve, rejects) => {
        handlePromise.resolve = resolve
        handlePromise.reject = rejects
    })
    handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('1')
}

export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('0')
}

//@ts-ignore
window.__prom = handlePromise


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
new Promise( (res: any) => {
    setTimeout( () => res("My name is"), 1000 )
})
    .then(onSuccess)
    .then(print)

function onSuccess(par: any) {
    return par + ' ' + 'Roman'
}

function print(par: any) {
    // console.log(par)
}


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
const promise1 = new Promise( (res: any) => {
    res({ name: "Anna" })
})
const promise2 = new Promise( (res: any) => {
    res({age: 16})
})
const promise3 = new Promise( (res: any) => {
    res({city: ''})
})

const forLog: any = {}

Promise.all([promise1, promise2, promise3])
    .then( (res: any) => {
        forLog.name = res[0].name
        forLog.age = res[1].age
        forLog.ciy = res[2].name

        // console.log(forLog)
    })



// just a plug
export default ()=>{};