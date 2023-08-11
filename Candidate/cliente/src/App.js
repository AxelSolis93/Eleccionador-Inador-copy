import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './containers/Main';
import CandidateProfile from './containers/CandidateProfile';
import LoginVoting from './containers/LoginVoting';
import CreateVote from './containers/CreateVote';
import ConvertToCandidate from './containers/ConvertToCandidate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main/>}/>
          <Route path='/LoginVoting' element={<LoginVoting/>} />
          <Route path='/redirect' element={ <Navigate to='./containers/LoginVoting'/>}   />

          <Route path='/CreateVote' element={<CreateVote/>} />
          <Route path='/redirect' element={ <Navigate to='./containers/CreateVote'/>}   />
  
          <Route path='/ConvertToCandidate' element={<ConvertToCandidate/>} />
          <Route path='/redirect' element={ <Navigate to='./containers/ConvertToCandidate'/>}   />
          
          <Route path='/CandidateProfile' element={<CandidateProfile/>} />
          <Route path='/redirect' element={ <Navigate to='./containers/CandidateProfile'/>}   />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
