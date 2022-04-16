import React, {Fragment} from 'react';
import Header from './Components/Layout/header';
import Meals from './Components/Meals/meals';
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
