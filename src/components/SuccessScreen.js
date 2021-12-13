import party from '../assets/img/party.png'

export default function () {
    return (
        <div className="Success">
            <div>
                <span>parabéns!</span>
                <img src={party} alt="party emoji" />
            </div>
            <span>Você não esqueceu de nenhum flashcard!</span>
        </div>
    )
}