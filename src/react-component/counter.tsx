import React, {useState, useCallback} from 'react'

const Counter = () => {
    const [cnt, setCnt] = useState(0)

    const onIncrease = useCallback(() => {
        setCnt(cnt+1)
    }, [cnt])

    const onDecrease = useCallback(() => {
        setCnt(cnt-1)
    }, [cnt])

    return (
        <div>
            <span>{cnt}</span>
            <button onClick={onIncrease}>PLUS</button>
            <button onClick={onDecrease}>MINUS</button>
        </div>
    )
}

export default Counter