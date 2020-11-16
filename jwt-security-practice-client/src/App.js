import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupComponent from './components/SignupComponent'
import SigninComponent from './components/SigninComponent'


function App() {
  return (
    <div className="App">
      <SignupComponent />
      <SigninComponent />
    </div>
  );
}

export default App;
