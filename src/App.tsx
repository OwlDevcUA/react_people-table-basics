import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getPeople } from './api';
import { NavBar } from './components/NavBar';
import {
  DispatchContext,
  GlobalStateProvider,
} from './components/Store/PeopleStore';
const AppContent = () => {
  const dispatch = useContext(DispatchContext);
  const loadPeople = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const result = await getPeople();

      dispatch({ type: 'FETCH_SUCCESS', payload: result });
    } catch {
      dispatch({ type: 'FETCH_ERROR' });
    }
  };

  useEffect(() => {
    loadPeople();
  }, []);

  return (
    <div data-cy="app">
      <NavBar />
      <main className="section">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export const App = () => (
  <GlobalStateProvider>
    <AppContent />
  </GlobalStateProvider>
);
