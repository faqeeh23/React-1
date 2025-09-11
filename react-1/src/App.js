import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello React 👋</h1>
      <p>My first React app is working!</p>
    </div>
  );
}

function UserCard(props) {
  return <p>User : {props.name}</p>
}

<UserCard name="Mohammed"/>

export default App;
