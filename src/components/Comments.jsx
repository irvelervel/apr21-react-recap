import { useEffect } from "react"

const Comments = ({ match }) => {

    useEffect(() => {
        console.log('loading info for ' + match.params.movieID)
    }, [match.params.movieID])

    return <h3>The id of the movie is: {match.params.movieID}</h3>
}


export default Comments