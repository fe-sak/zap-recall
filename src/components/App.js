import { useState } from "react";
import MiniLogo from "./LogoMini";
import StartScreen from "./StartScreen";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState(<StartScreen setCurrentScreenCall={setCurrentScreenCall} />);

    function setCurrentScreenCall(component) {
        return setCurrentScreen(component);
    }


    return (
        <>
            <main>
                <MiniLogo />
                {currentScreen}
            </main>
        </>
    )
}