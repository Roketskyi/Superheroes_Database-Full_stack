import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SuperheroList from './components/SuperheroList/SuperheroList';
import SuperheroForm from './components/SuperheroForm/SuperheroForm';
import SuperheroDetail from './components/SuperheroDetail/SuperheroDetail';
import NotFound from './components/NotFound/NotFound';
import './App.css';

const theme = createTheme();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <h1 style={{ textAlign: 'center', marginBottom: '20px', color: theme.palette.primary.main }}>
                    Superheroes Database
                </h1>

                <Routes>
                    <Route path="/" element={<SuperheroList />} />
                    <Route path="/add" element={<SuperheroForm />} />
                    <Route path="/edit/:id" element={<SuperheroForm />} />
                    <Route path="/superhero/:id" element={<SuperheroDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
};

export default App;
