import party from '../assets/img/party.png'

export default function () {
    return (
        <div className="Success">
            <div className="container">
                <div>
                    <span>PARABÉNS!</span>
                    <img src={party} alt="party emoji" />
                </div>
                <span>Você não esqueceu de nenhum flashcard!</span>
            </div>
        </div>
    )
}