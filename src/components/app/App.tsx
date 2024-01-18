import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/home/Home';
import NotFoundPage from '../../pages/notFound/NotFound';


const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
