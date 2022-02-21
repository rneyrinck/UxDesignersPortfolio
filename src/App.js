
import './App.css';
import { Route, Routes } from 'react-router';
import DropDown from './dropDown/dropDown';
import PartySquares from './partySquares/partySquares';
import LandingPage from './landingPage/landingPage';
import Header from './header/header';
import Footer from './footer/footer';
import WorkFlow from './workflow/workflow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/cover" element={<DropDown />} /> */}
        <Route path="/partysquares" element={<PartySquares />} />
        <Route path="/workflow" element={<WorkFlow />} />
        {/* <Route path="/" element={< />} />
        <Route path="/" element={< />} />
        <Route path="/" element={< />} />
        <Route path="/" element={< />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
