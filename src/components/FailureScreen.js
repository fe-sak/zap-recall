import sad from '../assets/img/sad.png'
import next from '../assets/img/next.png'
import StartScreen from './StartScreen'

export default function ({ setCurrentScreenCall }) {
    return (
        <div className="Failure">
            <div className="container">
                <div>
                    <span>Putz...</span>
                    <img src={sad} alt="party emoji" />
                </div>
                <span>Você esqueceu alguns flashcards..
                    Não desanime! Na próxima você consegue!
                </span>
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