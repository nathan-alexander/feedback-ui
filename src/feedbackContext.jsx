import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = React.createContext()

function FeedbackContextProvider(props) {
    const [feedBackItems, setFeedBackItems] = useState([
        {
            id: '1',
            text: 'This item is from context',
            rating: 10,
        },
    ])
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    })

    function addToFeedbackItems(newItem) {
        newItem.id = uuidv4()
        setFeedBackItems((prevItems) => {
            return [...prevItems, newItem]
        })
    }

    function removeFeedBackItem(itemId) {
        const newItems = feedBackItems.filter((item) => item.id !== itemId)
        setFeedBackItems(newItems)
    }

    function editFeedBackItem(item) {
        console.log(item)
        setFeedBackEdit({
            item,
            edit: true,
        })
    }

    function updateFeedBackItem(id, updateItem) {
        console.log(updateItem)
        setFeedBackItems(
            feedBackItems.map((item) =>
                item.id === id ? { ...item, ...updateItem } : item
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
            }}
        >
            {props.children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackContext, FeedbackContextProvider }
