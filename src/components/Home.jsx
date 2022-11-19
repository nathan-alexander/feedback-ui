import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FeedbackContext } from '../feedbackContext'
import FeedbackItem from './FeedbackItem'
import FeedbackStats from './FeedbackStats'
import FeedbackForm from './FeedbackForm'
function Home() {
    const { feedBackItems } = useContext(FeedbackContext)
    const feedBackItemElements = feedBackItems.map((item) => {
        return (
            <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <FeedbackItem
                    key={item.id}
                    id={item.id}
                    rating={item.rating}
                    text={item.text}
                    item={item}
                />
            </motion.div>
        )
    })
    return (
        <div className='app-container'>
            <FeedbackForm />
            {feedBackItems.length > 0 ? (
                <FeedbackStats />
            ) : (
                <h3>No stats to display</h3>
            )}
            <AnimatePresence>{feedBackItemElements}</AnimatePresence>
            <NavLink to='/about'>
                <h1 className='question-mark'>?</h1>
            </NavLink>
        </div>
    )
}

export default Home
