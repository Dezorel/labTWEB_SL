import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import {useState} from "react";

function App() {
  return (
    <div className="App">
        <div align="center">
            <SimpleBottomNavigation></SimpleBottomNavigation>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Septefrati Leonid CR-193 </h1>

          <div>
              <h3 align="right">Content</h3>
              <BasicGrid></BasicGrid>
          </div>

          <form action="">
              <FullWidthTextField></FullWidthTextField>
              <br/>
              <FullWidthTextField></FullWidthTextField>
              <br/>
              <FullWidthTextField></FullWidthTextField>
              <br/>
              <button type="submit">Submit</button>
          </form>
      </header>
    </div>
  );
}

export default App;

function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Домой"  />
                <BottomNavigationAction label="Подробнее"  />
                <BottomNavigationAction label="Узнать тайны мироздания"  />
            </BottomNavigation>
        </Box>
    );
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function BasicCard(props) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.theme}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item><BasicCard title="Card1" theme="1" description="Мне лень писать столько  :("></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><BasicCard title="CardTEst" theme="2" description="Мне лень писать столько текста.."></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><BasicCard title="CardULULU" theme="078..." description="Мне лень писать столько текста.... Да"></BasicCard></Item>
                </Grid>
            </Grid>
        </Box>
    );
}

function FullWidthTextField() {
    const [input, setInput] = useState('');
    console.log(input)
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


