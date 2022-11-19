import { useContext } from 'react'
import { FeedbackContext } from '../feedbackContext'

function FeedbackItem(props) {
    const { removeFeedBackItem, editFeedBackItem } = useContext(FeedbackContext)
    return (
        <div className='card'>
            <div className='num-display'>{props.rating}</div>
            <div className='text-display'>{props.text}</div>
            <div className='controls'>
                <span
                    className='edit-span'
                    onClick={() => {
                        editFeedBackItem(props.item)
                    }}
                >
                    e
                </span>
                <span
                    className='delete-span'
                    onClick={() => {
                        removeFeedBackItem(props.id)
                    }}
                >
                    x
                </span>
            </div>
        </div>
    )
}

export default FeedbackItem
