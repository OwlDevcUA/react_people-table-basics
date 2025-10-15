import { useContext } from 'react';
import { PersonData } from './PersonData';
import { StateContext } from '../components/Store/PeopleStore';

export const PeopleTable: React.FC = () => {
  const { people } = useContext(StateContext);

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
