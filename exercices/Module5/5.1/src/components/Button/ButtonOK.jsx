import { Context as counterContext } from "../../contexts/countersContext";
import { useContext } from 'react';

const ButtonOK = () => {
    const { counterOK, IncreaseOK } = useContext(counterContext);
    return (
        <div>
            OK: {counterOK}
            <button onClick={IncreaseOK}>increase OK</button>
        </div>
    )
}

export default ButtonOK