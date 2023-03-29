import React from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>

     <Header></Header>


     {/* pass data using children props  */}
    <Button>Sort By Data</Button>

    <Card></Card>

    </>
  );
};

export default App;