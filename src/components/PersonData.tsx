import React from 'react';
import { Person } from '../types';
import { Link } from 'react-router-dom';

type Props = {
  person: Person;
};

export const PersonData: React.FC<Props> = ({ person }) => {
  return (
    <tr data-cy="person">
      <td>
        <Link to="#/people/:slug">Jan van Brussel</Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>{person.fatherName ? person.fatherName : '-'}</td>
      <td>{person.motherName ? person.motherName : '-'}</td>
    </tr>
  );
};
