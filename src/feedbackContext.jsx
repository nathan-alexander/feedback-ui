import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = React.createContext()

function FeedbackContextProvider(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [feedBackItems, setFeedBackItems] = useState([])
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetch('http://localhost:5001/feedback')
            .then((res) => res.json())
            .then((data) => setFeedBackItems(data))
        setIsLoading(false)
    }, [])

    async function addToFeedbackItems(newItem) {
        const response = await fetch('http://localhost:5001/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
        const data = await response.json()

        setFeedBackItems((prevItems) => {
            return [...prevItems, data]
        })
    }

    async function removeFeedBackItem(itemId) {
        await fetch(`http://localhost:5001/feedback/${itemId}`, {
            method: 'DELETE',
        })
        const newItems = feedBackItems.filter((item) => item.id !== itemId)
        setFeedBackItems(newItems)
    }

    function editFeedBackItem(item) {
        setFeedBackEdit({
            item,
            edit: true,
        })
    }

    async function updateFeedBackItem(id, updateItem) {
        const response = await fetch(`http://localhost:5001/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateItem),
        })
        const data = await response.json()
        setFeedBackItems(
            feedBackItems.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
        )
    }
    return (
        <FeedbackContext.Provider
            value={{
                feedBackItems,
                addToFeedbackItems,
                removeFeedBackItem,
                editFeedBackItem,
                updateFeedBackItem,
                feedBackEdit,
                isLoading,
            }}
        >
            {props.children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackContext, FeedbackContextProvider }
