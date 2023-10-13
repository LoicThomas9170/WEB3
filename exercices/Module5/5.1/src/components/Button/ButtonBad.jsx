import { Context as CounterContext } from "../../contexts/countersContext";
import { useContext } from 'react';

const ButtonBad = () => {
    const { counterBad, IncreaseBad } = useContext(CounterContext);
    return (
        <div>
            Bad: {counterBad}
            <button onClick={IncreaseBad}>increase Bad</button>
        </div>
    )
}

export default ButtonBad