import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import TakeQuiz from './component/TakeQuiz';
import Result from "./component/Result"
import Nav from './utils/Nav';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/question/:quizId" element={<TakeQuiz />} />
        <Route path="/quiz/result/:total/:right" element={<Result />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
