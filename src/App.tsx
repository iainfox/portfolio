import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import { ThemeProvider } from "@/components/ThemeProvider"

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <HashRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App
