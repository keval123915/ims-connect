import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RewardList = () => {
    const [rewards, setRewards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/rewards');
                setRewards(response.data);
            } catch (err) {
                setError('Failed to fetch rewards.');
            } finally {
                setLoading(false);
            }
        };
        fetchRewards();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Rewards</h1>
            <ul>
                {rewards.map((reward) => (
                    <li key={reward._id}>
                        <p>Type: {reward.rewardType}</p>
                        <p>Points: {reward.points}</p>
                        <small>Awarded on: {new Date(reward.awardedDate).toLocaleDateString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RewardList;
