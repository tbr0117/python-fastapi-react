import React from "react"
import { ThemeProvider } from "@ui5/webcomponents-react";
import Login from "./Login";
function App() {
    // const bLogedIn = !(sessionStorage.UserName && sessionStorage.password);
    
    // function renderContent() {

    // };

    return (
        <ThemeProvider>
            <Login></Login>
        </ThemeProvider>
    )
}

export default App;