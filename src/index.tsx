import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../src/components';
import Home from './Pages/HomePage/Home';
import { TodoApp } from './modules/TodoApp/TodoApp';
import { NoPage } from './Pages/NoPage';
import './index.css';
import './fonts.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todoapp" element={<TodoApp />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
