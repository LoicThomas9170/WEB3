import { useContext } from 'react';
import { Context as counterContext } from "../../contexts/countersContext";

const ButtonGood = () => {
    const { counterGood, IncreaseGood } = useContext(counterContext);
    return (
        <div>
            Good: {counterGood}
            <button onClick={IncreaseGood}>increase good</button>
        </div>
    )
}

export default ButtonGood