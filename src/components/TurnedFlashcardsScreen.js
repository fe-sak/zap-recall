import Flashcard from "./Flashcard";

export default function TurnedFlashcardsScreen({ children: [counter, selectedDeck], setCurrentScreenCall }) {
    return (
        <div className="Flashcards">
            <Flashcard setCurrentScreenCall={setCurrentScreenCall}>
                {counter}
                {selectedDeck}
                {"answer"}
            </Flashcard>
        </div>
    )
}