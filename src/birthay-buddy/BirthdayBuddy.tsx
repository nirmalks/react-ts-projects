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
    <section className="bg-white shadow-lg rounded-lg p-6 w-1/3 flex flex-col mx-auto">
      <h3 className="text-xl font-semibold mb-4">{count} Birthdays Today</h3>
      {data.map((bday) => (
        <div className="space-y-4" key={bday.id}>
          <article className="flex items-center space-x-4 py-1">
            <img
              src={bday.image}
              className="rounded-full h-24 w-24"
              alt={bday.name}
            ></img>
            <div>
              <h4 className="text-md font-medium">{bday.name}</h4>
              <p className="text-gray-500 text-sm">{bday.age} years</p>
            </div>
          </article>
        </div>
      ))}
      <button
        className="mt-6 w-full bg-[#fb6aaa] text-white font-medium py-2 rounded-lg hover:bg-pink-500"
        onClick={() => setData([])}
      >
        Clear all
      </button>
    </section>
  );
}
