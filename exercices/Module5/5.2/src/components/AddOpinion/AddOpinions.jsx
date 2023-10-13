import { Context as OpinionContext } from "../../contexts/opinionsContext.jsx";
import { useContext } from 'react';
import { useState } from "react";

const AddOpinions = () => {
    const [newOpinion, setNewOpinion] = useState("")

    const { AddOpinion } = useContext(OpinionContext)

    const handleOnChange = (e) => {
        setNewOpinion(e.target.value)        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        AddOpinion(newOpinion)
        setNewOpinion('')
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                placeholder="enter your opinion here please"
                value={newOpinion}
                onChange={handleOnChange}
                required
            />
            <input type="submit" value="Add opinion" />
        </form>
    )
}

export default AddOpinions