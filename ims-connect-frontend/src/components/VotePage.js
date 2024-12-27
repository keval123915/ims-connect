import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VotePage = () => {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/ideas');
                setIdeas(response.data);
            } catch (err) {
                setError('Failed to fetch ideas');
            } finally {
                setLoading(false);
            }
        };
        fetchIdeas();
    }, []);

    const handleVote = async (ideaId, score) => {
        try {
            await axios.post(`http://localhost:4000/api/votes/${ideaId}`, { score });
            alert('Vote submitted successfully!');
            // Refresh ideas after voting
            const response = await axios.get('http://localhost:4000/api/ideas');
            setIdeas(response.data);
        } catch (err) {
            console.error('Error submitting vote:', err);
            alert('Failed to submit vote.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <div>
            <h1>Vote on Ideas</h1>
            <div className="row">
                {ideas.map((idea) => (
                    <div className="col-md-4 mb-4" key={idea._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{idea.title}</h5>
                                <p className="card-text">{idea.description}</p>
                                <p>
                                    <strong>Average Score:</strong>{' '}
                                    {idea.averageScore ? idea.averageScore.toFixed(2) : 'No votes yet'}
                                </p>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => handleVote(idea._id, 5)}
                                >
                                    Vote 5
                                </button>
                                <button
                                    className="btn btn-secondary me-2"
                                    onClick={() => handleVote(idea._id, 3)}
                                >
                                    Vote 3
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleVote(idea._id, 1)}
                                >
                                    Vote 1
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VotePage;
