import './App.scss';
import { NavBar } from './components/NavBar';
import { Outlet } from 'react-router-dom';
import {
  DispatchContext,
  GlobalStateProvider,
  StateContext,
} from './components/Store/PeopleStore';
import { useContext, useEffect } from 'react';
import { getPeople } from './api';

export const App = () => {
  const { people } = useContext(StateContext);
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
  }, [people]);

  return (
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
};
