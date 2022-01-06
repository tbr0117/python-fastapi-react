import { ThemeProvider } from "@ui5/webcomponents-react";
import Login from "./components/Login";
function App() {
    return (
        <ThemeProvider>
            <Login></Login>
        </ThemeProvider>
    )
}

export default App;