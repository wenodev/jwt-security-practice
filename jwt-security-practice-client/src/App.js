import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupComponent from './components/SignupComponent'
import SigninComponent from './components/SigninComponent'
import GetAllUsers from './components/GetAllUsers'



function App() {
  return (
    <div className="App">
      <SignupComponent />
      <SigninComponent />
      <GetAllUsers />
    </div>
  );
}

export default App;
