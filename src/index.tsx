import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../src/components';
import { Home } from './pages/HomePage/Home';
import { TodoPage } from './pages/TodoPage/TodoPage';
import { NoPage } from './pages/NoPage/NoPage';
import './index.css';
import './fonts.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todoapp" element={<TodoPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
