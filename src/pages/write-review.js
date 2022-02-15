import { useParams } from 'react-router-dom';

const WriteReview = () => {
    let {id} = useParams()
    console.log(`write review id: ${id}`) //working
    return(
        <div>
            write review
        </div>
    )
}

export default WriteReview