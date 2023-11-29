import Home from './pages/Home';
import Login from './pages/Login';
import Review from './pages/Review';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/app.css';

const App = () => {

    return(
        <>
        <br></br>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/review" element={<Review />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        </>
    );
    
        
};

export default App;