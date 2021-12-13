import { useState } from "react/cjs/react.development";
import decksCollection from "./decksCollection"
import turn from "../assets/img/turn.png"
import FlashcardFooter from "./FlashcardFooter";
import SuccessScreen from "./SuccessScreen";
import FailureScreen from "./FailureScreen";

let correct = 0;

export default function Flashcard({ children: [counter, setCounter, selectedDeck, goal], setCurrentScreenCall }) {
    const [questionOrAnswer, setQuestionOrAnswer] = useState("question");
    const [FlashcardState, setFlashcardState] = useState("Flashcards");

    if (FlashcardState === "Flashcards zap") correct++;
    console.log("correct:" + correct);
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

        else return <img id="button" src={turn} alt="flip card button" data-identifier="arrow" onClick={() => { //TODO
            if (FlashcardState === "Flashcards") {
                setQuestionOrAnswer("answer");
            }

            else {
                setQuestionOrAnswer("question");
                setCounter(++counter);
                setFlashcardState("Flashcards");

                if (counter === decks[selectedDeck].length + 1) {
                    if (correct >= goal) setCurrentScreenCall(<SuccessScreen setCurrentScreenCall={setCurrentScreenCall} />);
                    else setCurrentScreenCall(<FailureScreen setCurrentScreenCall={setCurrentScreenCall} />);
                    correct = 0;
                }
            }
        }} />;
    }

    return (
        <div className={FlashcardState} >
            <div className="Flashcard" data-identifier="flashcard">
                {flashcardHeader()}
                <span data-identifier="counter" id="counter">{counter}/{decks[selectedDeck].length}</span>
                <span id={questionOrAnswer === "question" ? "question" : "answer"}>{decks[selectedDeck][counter - 1][questionOrAnswer]}</span>
                {flashcardFooter()}
            </div>
        </div>
    )
}
