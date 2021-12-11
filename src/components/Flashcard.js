import decksCollection from "./decksCollection"
import turn from '../assets/img/turn.png'
import TurnedFlashcardsScreen from "./TurnedFlashcardsScreen";

export default function Flashcard({ children: [counter, selectedDeck, questionOrAnswer], setCurrentScreenCall }) {
    let decks = decksCollection();

    function onClickTernary() {
        if (questionOrAnswer === 'question') {
            setCurrentScreenCall(<TurnedFlashcardsScreen setCurrentScreenCall={setCurrentScreenCall}>
                {counter}
                {selectedDeck}
            </TurnedFlashcardsScreen>)
        }
    }

    function flashcardHeader() {
        if (questionOrAnswer === 'answer') {
            return (
                <span id="flashcardHeader">
                    {decks[selectedDeck][counter - 1].question}
                </span>
            )
        }
    }

    function flashcardFooter() {
        if (questionOrAnswer === 'answer') {
            // TODO
        }
        else return <img id="button" src={turn} alt="flip card button" onClick={onClickTernary} />;
    }

    return (
        <div className="Flashcard">
            {flashcardHeader()}
            <span id="counter">{counter}/{decks[selectedDeck].length}</span>
            <span id={questionOrAnswer === "question" ? 'question' : 'answer'}>{decks[selectedDeck][counter - 1][questionOrAnswer]}</span>
            {flashcardFooter()}
        </div>
    )
}