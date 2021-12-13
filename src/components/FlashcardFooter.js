export default function FlashcardFooter({ setFlashcardStateCall }) {
    return (
        <div className="FlashcardFooter">
            <div onClick={() => setFlashcardStateCall("Flashcards neutral ")}>
                <span>Aprendi agora</span>
            </div>
            <div onClick={() => setFlashcardStateCall("Flashcards incorrect")}>
                <span>Não lembrei</span>
            </div>
            <div onClick={() => setFlashcardStateCall("Flashcards correct")}>
                <span>Lembrei com esforço</span>
            </div>
            <div onClick={() => setFlashcardStateCall("Flashcards zap")}>
                <span>Zap!</span>
            </div>
        </div>
    )
}