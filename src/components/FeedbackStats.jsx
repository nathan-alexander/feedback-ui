import { useContext } from 'react'
import { FeedbackContext } from '../feedbackContext'

function FeedbackStats() {
    const { feedBackItems } = useContext(FeedbackContext)
    const average =
        feedBackItems.reduce((acc, cur) => {
            return acc + cur.rating
        }, 0) / feedBackItems.length

    return (
        <div className='feedback-stats'>
            <h5>Ratings: {feedBackItems.length}</h5>
            <h5>Average: {average}</h5>
        </div>
    )
}

export default FeedbackStats
