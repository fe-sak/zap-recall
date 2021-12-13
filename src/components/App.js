import { useState } from "react";
import minilogo from "./LogoMini";
import StartScreen from "./StartScreen";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState(<StartScreen setCurrentScreenCall={setCurrentScreenCall} />);

    function setCurrentScreenCall(component) {
        return setCurrentScreen(component);
    }

    return (
        <>
            <main>
                <img className="MiniLogo" src={minilogo} alt="mini logo site" />
                {currentScreen}
            </main>
        </>
    )
}