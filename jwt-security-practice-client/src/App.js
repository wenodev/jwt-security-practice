import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupComponent from './components/SignupComponent'

function App() {
  return (
    <div className="App">
      <SignupComponent />
    </div>
  );
}

export default App;
