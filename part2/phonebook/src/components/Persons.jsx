const Persons = ({ search, personsFiltered, persons }) => {
  return (
    <ul>
      {search !== ""
        ? personsFiltered.map((person) => {
            return (
              <li key={person.id}>
                {person.name} - {person.number}
              </li>
            );
          })
        : persons.map((person) => {
            return (
              <li key={person.id}>
                {person.name} - {person.number}
              </li>
            );
          })}
    </ul>
  );
};

export default Persons;
