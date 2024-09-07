import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';

const LazyPosts = lazy(() => import('./pages/Posts'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='posts' element={<Suspense fallback={<Spinner />}><LazyPosts /></Suspense>} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
