import {Context as OpinionContext} from "../../contexts/opinionsContext.jsx";
import {useContext} from 'react';

const Opinion = ({opinion}) => {
    const { VoteOpinion } = useContext(OpinionContext)

    return (
        <div>
            {opinion.text}: {opinion.votes}
            <button onClick={() => VoteOpinion(opinion.id)}>Vote</button>
        </div>
    )
}

export default Opinion