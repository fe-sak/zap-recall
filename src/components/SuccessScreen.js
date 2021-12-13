import party from '../assets/img/party.png'
import next from '../assets/img/next.png'
import StartScreen from './StartScreen'

export default function ({ setCurrentScreenCall }) {
    return (
        <div className="Success">
            <div className="container">
                <div>
                    <span>PARABÉNS!</span>
                    <img src={party} alt="party emoji" />
                </div>
                <span>Você não esqueceu de nenhum flashcard!</span>
            </div>
            <div className="Deck" onClick={() => {
                setCurrentScreenCall(<StartScreen setCurrentScreenCall={setCurrentScreenCall} />)
            }}>
                <div>
                    <span>Tentar novamente</span>
                    <img src={next} alt="emoticon" />
                </div>
            </div>
        </div>
    )
}