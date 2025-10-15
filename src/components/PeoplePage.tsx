import React, { useContext } from 'react';
import { PeopleTable } from './PeopleTable';
import { Loader } from './Loader';
import { StateContext } from './Store/PeopleStore';

export const PeoplePage: React.FC = () => {
  const { people, loading, error } = useContext(StateContext);

  return (
    <>
      <h1 className="title">People Page</h1>
      <div className="block">
        <div className="box table-container">
          {loading && <Loader />}

          {error && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}

          {!people.length && (
            <p data-cy="noPeopleMessage">There are no people on the server</p>
          )}

          {!!people.length && <PeopleTable />}
        </div>
      </div>
    </>
  );
};
