import decksCollection from "./decksCollection"
import turn from "../assets/img/turn.png"
import FlashcardFooter from "./FlashcardFooter";
import { useState } from "react/cjs/react.development";
import SuccessScreen from "./SuccessScreen";
import FailureScreen from "./FailureScreen";

let incorrectFlag = false;

export default function Flashcard({ children: [counter, setCounter, selectedDeck], setCurrentScreenCall }) {
    const [questionOrAnswer, setQuestionOrAnswer] = useState("question");
    const [FlashcardState, setFlashcardState] = useState("Flashcards");

    if (FlashcardState === "Flashcards incorrect") incorrectFlag = true;
    console.log(incorrectFlag)

    function setFlashcardStateCall(state) {
        return setFlashcardState(state)
    }

    let decks = decksCollection();

    function flashcardHeader() {
        if (questionOrAnswer === "answer") {
            return (
                <span id="flashcardHeader">
                    {decks[selectedDeck][counter - 1].question}
                </span>
            )
        }
    }

    function flashcardFooter() {
        if (questionOrAnswer === "answer" && FlashcardState === "Flashcards") {
            return <FlashcardFooter setFlashcardStateCall={setFlashcardStateCall} />
        }

        else return <img id="button" src={turn} alt="flip card button" onClick={() => { //TODO
            if (FlashcardState === "Flashcards") {
                setQuestionOrAnswer("answer");
            }

            else {
                setQuestionOrAnswer("question");
                setCounter(++counter);
                setFlashcardState("Flashcards");

                if (counter === decks[selectedDeck].length + 1) {
                    if (incorrectFlag) return setCurrentScreenCall(<FailureScreen />);
                    else setCurrentScreenCall(<SuccessScreen />);
                }
            }
        }} />;
    }

    return (
        <div className={FlashcardState}>
            <div className="Flashcard">
                {flashcardHeader()}
                <span id="counter">{counter}/{decks[selectedDeck].length}</span>
                <span id={questionOrAnswer === "question" ? "question" : "answer"}>{decks[selectedDeck][counter - 1][questionOrAnswer]}</span>
                {flashcardFooter()}
            </div>
        </div>
    )
}
