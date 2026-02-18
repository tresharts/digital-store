import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NotFolder } from './components/NotFolder/NotFolder';
import { Produtos } from './pages/Produtos';
import Categoria from './pages/Categorias';
import { PageLayout } from '@/layouts/PageLayout';
import '@/App.css';
import { HomePage } from '@/pages/HomePage';
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