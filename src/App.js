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

function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
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
                    <Item><BasicCard></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><BasicCard></BasicCard></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><BasicCard></BasicCard></Item>
                </Grid>
            </Grid>
        </Box>
    );
}


