import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <>
      <h2>This is the header: <i>{props.text}</i></h2>
    </>
  );
}

export default App;
