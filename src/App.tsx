import { Landing } from '@Components/Landing';
import { Route, Routes } from 'react-router-dom';
import Providers from './contextes/Providers';

function App() {
  return (
    <>
      <Providers>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Landing />
              </>
            }
          />
        </Routes>
      </Providers>
    </>
  );
}

export default App;
