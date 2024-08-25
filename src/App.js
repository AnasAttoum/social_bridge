import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Home from './pages/Home';

const LazyPosts = lazy(() => import('./pages/Posts'))
const LazyPostDetails = lazy(() => import('./pages/PostDetails'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='posts' element={<Suspense fallback={<Spinner />}><LazyPosts /></Suspense>} />
          <Route path='/posts/:postId' element={<Suspense fallback={<Spinner />}><LazyPostDetails /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
