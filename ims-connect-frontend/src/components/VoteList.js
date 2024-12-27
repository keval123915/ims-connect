import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VoteList = () => {
    const [votes, setVotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVotes = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/votes');
                setVotes(response.data);
            } catch (err) {
                setError('Failed to fetch votes.');
            } finally {
                setLoading(false);
            }
        };
        fetchVotes();
    }, []);

    const castVote = async (ideaId) => {
        try {
            await axios.post('http://localhost:4000/api/votes', { ideaId, score: 5 });
            alert('Vote submitted successfully!');
        } catch (err) {
            alert('Failed to cast vote.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Votes</h1>
            <ul>
                {votes.map((vote) => (
                    <li key={vote._id}>
                        <p>Idea ID: {vote.ideaId}</p>
                        <p>Score: {vote.score}</p>
                        <button onClick={() => castVote(vote.ideaId)}>Vote</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VoteList;
