import * as React from 'react';

const CommitCard = ({message, username, hash, dateCreated}) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    <h2>Commit Message: {message}</h2>
                    <p>Committer Username: {username}</p>
                    <p>Commit Hash: {hash}</p>
                    <p>Date Created: {dateCreated}</p>
                </div>
            </div>
        </div>
    )
}

export default CommitCard;