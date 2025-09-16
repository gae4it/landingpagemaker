import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddLandingPage } from './pages/AddLandingPage';
import { EditLandingPageList } from './pages/EditLandingPageList';
import { EditLandingPageDetail } from './pages/EditLandingPageDetail';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddLandingPage />} />
          <Route path="/edit" element={<EditLandingPageList />} />
          <Route path="/edit/:id" element={<EditLandingPageDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
