import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [sortedOpinions, setSortedOpinions] = useState([])

    const AddOpinion = (opinion) => {
        //use uid to generate a unique id
        const newSortedOpinions = sortedOpinions.concat({
            id: uuid(),
            text: opinion,
            votes: 1
        })
        newSortedOpinions.sort((a, b) => b.score - a.score);
        setSortedOpinions(newSortedOpinions)
    }

    const VoteOpinion = (id) => {
        const newSortedOpinions = [...sortedOpinions]
        const opinionToUpdate = newSortedOpinions.find(opinion => opinion.id === id)

        if (!opinionToUpdate) return undefined

        opinionToUpdate.votes += 1
        newSortedOpinions.sort((a, b) => b.score - a.score);
        setSortedOpinions(newSortedOpinions)
    }

    const exposedValue = {
        sortedOpinions,
        AddOpinion,
        VoteOpinion,
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
