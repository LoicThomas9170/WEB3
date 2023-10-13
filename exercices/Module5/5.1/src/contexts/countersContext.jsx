import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [counterGood, setCounterGood] = useState(0)
    const [counterOK, setCounterOK] = useState(0)
    const [counterBad, setCounterBad] = useState(0)

    const IncreaseGood = () => {
        setCounterGood(counterGood+1)
    }

    const IncreaseOK = () => {
        setCounterOK(counterOK+1)
    }

    const IncreaseBad = () => {
        setCounterBad(counterBad+1)
    }

    const resetAll = () => {
        setCounterGood(0)
        setCounterOK(0)
        setCounterBad(0)
    }

    const exposedValue = {
        counterGood,
        counterOK,
        counterBad,
        IncreaseGood,
        IncreaseOK,
        IncreaseBad,
        resetAll,
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
