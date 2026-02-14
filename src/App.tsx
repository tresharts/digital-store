import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from '@/layouts/PageLayout';
import '@/App.css';
import { HomePage } from '@/pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;