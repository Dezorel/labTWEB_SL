import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Septefrati Leonid CR-193 </h1>
      </header>
        <FormFiveField></FormFiveField>
        <FormSevenField></FormSevenField>
    </div>
  );
}

export default App;

function FullWidthTextField() {
    const [input, setInput] = useState('');
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <input value={input} onInput={e => setInput(e.target.value)}/>
        </Box>
    );
}

function FormFiveField() {
    return (
        <form>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <h1>End first 5 fields</h1>
        </form>
    );
}

function FormSevenField() {
    return (
        <form>
            <FormFiveField></FormFiveField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <h1>End first 7 fields</h1>
        </form>
    );
}

