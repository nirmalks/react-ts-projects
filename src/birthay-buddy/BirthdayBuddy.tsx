import { useState } from 'react';

interface BirthDayInfo {
  id: number;
  name: string;
  age: number;
  image: string;
}

export default function BirthdayBuddy({
  birthdays,
}: {
  birthdays: BirthDayInfo[];
}) {
  const [data, setData] = useState(birthdays);
  const count = data.length;
  return (
    <section>
      <h3>{count} Birthdays Today</h3>
      {data.map((bday) => (
        <article>
          <img src={bday.image} alt={bday.name}></img>
          <h4>{bday.name}</h4>
          <p>{bday.age} years</p>
        </article>
      ))}
      <button onClick={() => setData([])}>Clear all</button>
    </section>
  );
}
