import React, { useState } from 'react';
import { useLazyQuery, useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;
const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

// https://codesandbox.io/s/queries-example-app-final-nrlnl

function index() {
  const { loading, error, data } = useQuery(GET_DOGS);
  console.log('data', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={null}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}

function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}

function DogPhoto({ breed }) {
  const { loading, error, data, refetch, networkStatus, startPolling, stopPolling } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
      pollInterval: 0,
    },
  );

  // if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return <p>Loading...</p>;
  // if (error) return `Error!: ${error}`;

  return (
    <div>
      {data && <img src={data.dog.displayImage} style={{ height: '100px', width: '100px' }} />}
      <button onClick={() => refetch()}>refetch!</button>
      <button onClick={() => stopPolling()}>stopPolling!</button>
    </div>
  );
}

function DogPhotoQueryManually() {
  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {data && data.dog && <img src={data.dog.displayImage} />}
      <button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>Click me!</button>
    </div>
  );
}
function App() {
  const [selectedDog, setSelectedDog] = useState(null);

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <div>
      <h2>Building Query components 🚀</h2>
      {selectedDog && <DogPhoto breed={selectedDog} />}
      <Dogs onDogSelected={onDogSelected} />
      <DogPhotoQueryManually />
    </div>
  );
}

export default App;
