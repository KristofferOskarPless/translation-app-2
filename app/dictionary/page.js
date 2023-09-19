import Image from 'next/image'
import TextField from '../components/textfield';
import Button from '../components/button';
import Layout from '../layout';
import List from '../components/list'

const TablePage = () => {
  const rows = [
    {
      id: 1,
      norwegian: 'Hei',
      english: 'Hello',
    },
    {
      id: 2,
      norwegian: 'Takk',
      english: 'Thank you',
    },
    {
      id: 3,
      norwegian: 'Mat',
      english: 'Food',
    },
    {
      id: 4,
      norwegian: 'Skinke',
      english: 'Ham',
    },
    {
      id: 5,
      norwegian: 'Ost',
      english: 'Cheese',
    },
    {
      id: 6,
      norwegian: 'Potet',
      english: 'Potato',
    },
    
    // ... other rows
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
    <div className=" w-1/2 pt-48">
      <div className="justify-center">
        <h1 className="text-5xl font-semibold pb-8">🚀 Translations</h1>
        <List rows={rows} />
      </div>
    </div>
  </main>
  );
};

export default TablePage;