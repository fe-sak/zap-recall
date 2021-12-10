import { useState } from "react";
import Flashcard from "./FlashCard";
import MiniLogo from "./LogoMini";
import StartScreen from "./StartScreen";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('StartScreen');

    const screens = {
        StartScreen: <StartScreen setCurrentScreen={setCurrentScreen} />,
        Flashcard: <Flashcard setCurrentScreen={setCurrentScreen} />,
    };
    return (
        <>
            <main>
                <MiniLogo />
                {screens[currentScreen]}
            </main>
        </>
    )
}