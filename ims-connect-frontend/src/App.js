import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IdeaList from './components/IdeaList';
import IdeaForm from './components/IdeaForm';
import Login from './components/Login';
import Register from './components/Register';
import VotePage from './components/VotePage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<IdeaList />} />
                    <Route path="/submit" element={<IdeaForm />} />
                    <Route path="/vote" element={<VotePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
