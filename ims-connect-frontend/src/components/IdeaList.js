import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IdeaList = () => {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/ideas');
                setIdeas(response.data);
            } catch (err) {
                setError('Failed to fetch ideas.');
            } finally {
                setLoading(false);
            }
        };
        fetchIdeas();
    }, []);

    if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <div>
            <h1 className="mb-4">Ideas</h1>
            <div className="row">
                {ideas.map((idea) => (
                    <div className="col-md-4 mb-4" key={idea._id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{idea.title}</h5>
                                <p className="card-text">{idea.description}</p>
                                <p className="text-muted">Submitted: {new Date(idea.submissionDate).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IdeaList;
