import './App.css';
import Counter from '../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

function App() {
  return (
    <>
      <h1>Ifood</h1>
      <Counter />
      <SmartCounter />
      <IfoodCounter />
    </>   
  );
}

export default App;
