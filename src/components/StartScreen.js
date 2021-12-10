import { useState } from 'react'
import logo from '../assets/img/logo.png'
import next from '../assets/img/next.png'

export default function StartScreen({ setCurrentScreen }) {
    const [decks, setDecks] = useState(['Praticar React']);
    return (
        <div className="StartScreen">
            <img src={logo} alt="site logo" />
            {decks.map((deck) => <Deck setCurrentScreen={setCurrentScreen}>{deck}</Deck>)}
        </div>
    )
}

function Deck({ children, setCurrentScreen }) {
    return (
        <div className="Deck" onClick={() => setCurrentScreen("Flashcard")}>
            <div>
                {children}
                <img src={next} alt="emoticon" />
            </div>
        </div>
    )
}