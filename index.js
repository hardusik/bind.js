function logObj() {
    console.log(`Obj: ${this.id}, ${this.title}`)
}

const obj1 = {
    id: 1,
    title: 'First object',
}
const obj2 = {
    id: 2,
    title: 'Second object',
}


function bind(ctx, fn) {
    return function(...args) {
        fn.apply(ctx, args)
    }
}

bind(obj1, logObj)()
bind(obj2, logObj)()
