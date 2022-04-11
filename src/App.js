import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={registration("leonid", "123")}> Septefrati Leonid CR-193 </h1>
          <input type="text" onChange={(e) => localStorage.setItem("registerUser", e.target.value)}></input>
          <input type="password" onChange={(e) => localStorage.setItem("registerPass", e.target.value)}></input>
          <button onClick={checkIfExist}>Enter</button>
      </header>
    </div>
  );
}

export default App;

function registration(username, password)
{
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);
}

function checkIfExist()
{
    if (localStorage.getItem("user") == localStorage.getItem("registerUser"))
    {
        if (localStorage.getItem("pass") == localStorage.getItem("registerPass"))
        {
            alert("Добро пожаловать " + localStorage.getItem("user"))
        }
        else
        {
            alert("Неправильный логин или пароль")
        }
    }
    else
    {
        alert("Неправильный логин или пароль")
    }
}