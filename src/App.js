import './App.css';
import Cards from './cards/Cards';
import Card from './card/Card';
import InputSearch from './inputSearch/InputSearch';

function App() {
  return (
    <>
      <div className='fondo'></div>

      <div className="App">

        <InputSearch />

        <Card />

        <Cards />

      </div>
    </>
  );
}

export default App;
