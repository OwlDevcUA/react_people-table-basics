import './App.scss';
import { NavBar } from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { GlobalStateProvider } from './components/Store/PeopleStore';

export const App = () => (
  <GlobalStateProvider>
    <div data-cy="app">
      <NavBar />

      <main className="section">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  </GlobalStateProvider>
);
