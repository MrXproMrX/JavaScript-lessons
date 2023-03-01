const withDefaultValue = (target, defaultValue = 0) =>{
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue(
    {
        x:24,
        y:42
    },0
)

// Hidden properies

const withHeiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => ! p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const data = withHeiddenProps({
    name: 'Vladilen',
    age:25,
    _uid: '1232255'
})

// Optimization

const IndexadArray = new Proxy(Array, {
    construct(target, [args]){
        const index = {}
        args.forEach(item => (index[item.id] = item))
        return new Proxy(new target(...args),{
            get(arr, prop){
                switch(prop){
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                        case 'findByid':
                            return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = [
    {id:1, name: 'Vladilen', job:'Fullstack', age:25},
    {id:2, name: 'Elena', job:'Stubent', age:22},
    {id:3, name: 'Victor', job:'Backend', age:23},
    {id:4, name: 'Vasilise', job:'Teacher', age:24},
]

// const index = {}
// userData.forEach(i => (index[i.id] = i))