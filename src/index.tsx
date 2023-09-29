import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, NoPage } from '../src/components';
import { Home, TodoPage } from '../src/random';
// import { NoPage } from '../src/pages';
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
