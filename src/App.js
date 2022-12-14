import logo from './logo.svg';
import './App.css';
import { Testimonio } from './components/testimony';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
