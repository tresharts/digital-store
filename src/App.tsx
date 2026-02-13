import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from './layouts/PageLayout';
import './App.css';
import { HomePage } from './pages/HomePage';
import { NotFolder } from './components/NotFolder/NotFolder';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFolder />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;