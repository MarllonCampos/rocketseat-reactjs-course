import React from 'react';
import Routes from './routes'


import Main from './pages/main'


import './styles.css'


import Header from './components/Header'
const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
