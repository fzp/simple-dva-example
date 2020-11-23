import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';

function App(props) {
  function changeText() {
    props.dispatch({
      type: 'app/changeText',
      text: "Hello",
    });
  }

  function changeTextAsync() {
    props.dispatch({
      type: 'app/changeTextAsync',
      text: "Hello After 1 Second",
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {props.text}
        </p>
        <button onClick={changeText}>Change Text</button>
        <button onClick={changeTextAsync}>Change Text After 1 Second</button>
      </header>
    </div>
  );
}

export default connect((state)=>{return state.app})(App);
