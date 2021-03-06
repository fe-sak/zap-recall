import { useState } from 'react'
import logo from '../assets/img/logo.png'
import next from '../assets/img/next.png'
import FlashcardsScreen from './FlashcardsScreen';
import decksCollection from './decksCollection';

export default function StartScreen({ setCurrentScreenCall }) {
    const [decks, setDecks] = useState(Object.getOwnPropertyNames(decksCollection()));
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="StartScreen">
            <img src={logo} alt="site logo" />

            <input type="number" min="1"
                placeholder="Sua meta de zaps"
                value={inputValue}
                onChange={e => {
                    setInputValue(e.target.value)
                }} />

            {decks.map((deck) =>
                <Deck setCurrentScreenCall={setCurrentScreenCall}>
                    {deck}
                    {inputValue}
                </Deck>)}
        </div>
    )
}

function Deck({ children: [deck, goal], setCurrentScreenCall }) {
    return (
        <div className="Deck" data-identifier="start-zap-recall" onClick={() => {
            if (goal >= 1) {
                setCurrentScreenCall(
                    <FlashcardsScreen setCurrentScreenCall={setCurrentScreenCall}>
                        {deck}
                        {goal}
                    </FlashcardsScreen>)
            }
            else alert("A meta deve ser igual ou maior a 1");
        }
        }>
            <div>
                <span>{deck}</span>
                <img src={next} alt="emoticon" />
            </div>
        </div>
    )
}