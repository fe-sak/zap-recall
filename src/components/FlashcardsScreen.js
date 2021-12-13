import { useState } from 'react'
import Flashcard from './Flashcard';

export default function FlashcardsScreen({ children: [selectedDeck, goal], setCurrentScreenCall }) {
    const [counter, setCounter] = useState(1);

    return (
        <Flashcard setCurrentScreenCall={setCurrentScreenCall}>
            {counter}
            {setCounter}
            {selectedDeck}
            {goal}
        </Flashcard>
    )
}