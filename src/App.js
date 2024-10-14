import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Me from './pages/Me';
import Labo from './pages/Labo';

function App() {
    return (
        <Router basename="/akilasatolu">
            <div className='app'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/me" element={<Me />} />
                    <Route path="/labo" element={<Labo />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
