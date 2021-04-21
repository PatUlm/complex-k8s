import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeenIndexes = ({seenIndexes}) => {
  return (
    <div>
      {seenIndexes.map(({ number }) => number).join(', ')}
    </div>
  );
}

const Values = ({values}) => {
  const entries = [];

  for (let key in values) {
    entries.push(
      <div key={key}>
        For index {key} I calculated {values[key]}
      </div>
    );
  }

  return entries;
}

const Fib = () => {
  const [index, setIndex] = useState('');
  const [values, setValues] = useState({});
  const [seenIndexes, setSeenIndexes] = useState([]);

  useEffect(
    () => {
      fetchValues();
      fetchIndexes();
    },
    [index]
  );

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    setValues(values.data);
  }

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get('/api/values/all');
    setSeenIndexes(seenIndexes.data);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index,
    });

    setIndex('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          value={index}
          onChange={(event) => setIndex(event.target.value)}
        />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      <SeenIndexes seenIndexes={seenIndexes} />

      <h3>Calculated Values:</h3>
      <Values values={values} />

    </div>
  );
}

export default Fib;
