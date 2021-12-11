import { useState } from 'react'
import Flashcard from './Flashcard';

export default function FlashcardsScreen({ children: selectedDeck, setCurrentScreenCall }) {
    const [counter, setCounter] = useState(1);

    return (
        <div className="Flashcards">
            <Flashcard setCurrentScreenCall={setCurrentScreenCall}>
                {counter}
                {selectedDeck}
                {"question"}
            </Flashcard>
        </div>
    )
}