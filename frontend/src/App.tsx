import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEntryPage from './pages/AddEntryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEntryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;