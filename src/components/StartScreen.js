import { useState } from 'react'
import logo from '../assets/img/logo.png'
import next from '../assets/img/next.png'
import FlashcardsScreen from './FlashcardsScreen';

export default function StartScreen({ setCurrentScreenCall }) {
    const [decks, setDecks] = useState(['Praticar React']);

    return (
        <div className="StartScreen">
            <img src={logo} alt="site logo" />
            {decks.map((deck) => <Deck setCurrentScreenCall={setCurrentScreenCall}>{deck}</Deck>)}
        </div>
    )
}

function Deck({ children: deck, setCurrentScreenCall }) {

    return (
        <div className="Deck" data-identifier="start-zap-recall" onClick={() => setCurrentScreenCall(<FlashcardsScreen setCurrentScreenCall={setCurrentScreenCall}>
            {deck}
        </FlashcardsScreen>)}>
            <div>
                {deck}
                <img src={next} alt="emoticon" />
            </div>
        </div>
    )
}