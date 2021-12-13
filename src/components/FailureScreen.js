import sad from '../assets/img/sad.png'

export default function () {
    return (
        <div className="Success">
            <div>
                <span>Putz...</span>
                <img src={sad} alt="party emoji" />
            </div>
            <span>Você esqueceu alguns flashcards..
                Não desanime! Na próxima você consegue!</span>
        </div>
    )
}