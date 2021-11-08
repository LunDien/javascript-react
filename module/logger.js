export default function logger(reducer) {
    return (privState, action, args) => {
        console.group(action)
        console.log('privState: ', privState)
        console.log('Arguments Action: ', args)
        const nextState = reducer(privState, action, args)
        console.log('nextState: ', nextState)
        console.groupEnd()
        return nextState
    }
}