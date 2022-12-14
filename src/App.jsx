import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Authors from './components/Authors';
import AllAuthors from './pages/AllAuthors';
import NewAuthor from './pages/NewAuthor';
import EditAuthor from './pages/EditAuthor';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path={'/'} element={<Navigate to="/authors" />} />
            <Route path={'/authors'} element={<Authors />}>
              <Route index element={<AllAuthors />} />
              <Route path="new" element={<NewAuthor />} />
              <Route path=":id/edit" element={<EditAuthor />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;