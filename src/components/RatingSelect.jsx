import { useContext, useEffect, useState } from 'react'
import { FeedbackContext } from '../feedbackContext'
import FeedbackItem from './FeedbackItem'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)
    const { feedBackEdit } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedBackEdit.edit) {
            setSelected(feedBackEdit.item.rating)
        }
    }, [feedBackEdit])
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    // NOTE: simplified with iteration
    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}
export default RatingSelect
