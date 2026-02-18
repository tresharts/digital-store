import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { PageLayout } from './layouts/PageLayout';
import './App.css';
import { HomePage } from './pages/HomePage';
import { NotFolder } from './components/NotFolder/NotFolder';
import { Produtos } from './pages/Produtos';
import Categoria from './pages/Categorias';
=======
import { PageLayout } from '@/layouts/PageLayout';
import '@/App.css';
import { HomePage } from '@/pages/HomePage';

>>>>>>> 0b8c0544c32e8fcf55ae9fb59f71bf2b9e503015
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/produtos' element={<Produtos/>}/>
          <Route path='categorias' element={<Categoria/>}/>
        </Route>
        <Route path="*" element={<NotFolder />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;