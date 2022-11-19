import { useState, useContext, useEffect } from 'react'
import FormButton from './FormButton'
import RatingSelect from './RatingSelect'
import { FeedbackContext } from '../feedbackContext'
function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const { addToFeedbackItems, feedBackEdit, updateFeedBackItem } =
        useContext(FeedbackContext)

    useEffect(() => {
        if (feedBackEdit.edit) {
            setText(feedBackEdit.item.text)
            setRating(feedBackEdit.item.rating)
            setBtnDisabled(false)
        }
    }, [feedBackEdit])
    function handleTextChange(e) {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Review needs to be 10 characters or more')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newFeedback = {
            text,
            rating,
        }
        if (feedBackEdit.edit) {
            updateFeedBackItem(feedBackEdit.item.id, newFeedback)
        } else {
            addToFeedbackItems(newFeedback)
        }

        setText('')
        setRating(10)
        setBtnDisabled(true)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <FormButton type='submit' isDisabled={btnDisabled}>
                        Enter review
                    </FormButton>
                </div>
            </form>
            {message && <div className='message'>{message}</div>}
        </div>
    )
}

export default FeedbackForm
