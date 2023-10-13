import { Context as CounterContext } from "../../contexts/countersContext";
import { useContext } from 'react';

const ButtonReset = () => {
    const { resetAll } = useContext(CounterContext);
    return (
        <div>
            <button onClick={resetAll}>Reset</button>
        </div>
    )
}

export default ButtonReset