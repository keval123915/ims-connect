import React, { useState } from 'react';
import axios from 'axios';

const IdeaForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await axios.post('http://localhost:4000/api/ideas', { title, description });
            setTitle('');
            setDescription('');
            setSuccessMessage('Idea submitted successfully!');
        } catch (err) {
            setErrorMessage('Failed to submit the idea. Try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="mb-4">Submit a New Idea</h1>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter idea title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="4"
                        placeholder="Enter idea description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Idea'}
                </button>
            </form>
        </div>
    );
};

export default IdeaForm;
