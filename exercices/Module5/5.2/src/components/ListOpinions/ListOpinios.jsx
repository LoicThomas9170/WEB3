import {Context as OpinionContext} from "../../contexts/opinionsContext.jsx";
import {useContext} from 'react';
import Opinion from "./Opinion.jsx";

const ListOpinions = () => {
    const {sortedOpinions} = useContext(OpinionContext)

    return sortedOpinions.map((opinion) => ( 
        <Opinion key={opinion.id} {...{opinion}}/> 
    ))
}

export default ListOpinions