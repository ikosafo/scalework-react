import logo from './logo.png';
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="logo-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form />
    </div>
  );
}

export default App;
