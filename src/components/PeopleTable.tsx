import { useContext, useEffect } from 'react';
import { PersonData } from './PersonData';
import { DispatchContext, StateContext } from '../components/Store/PeopleStore';
import { getPeople } from '../api';

export const PeopleTable: React.FC = () => {
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
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <PersonData key={person.slug} person={person} />
        ))}
      </tbody>
    </table>
  );
};
