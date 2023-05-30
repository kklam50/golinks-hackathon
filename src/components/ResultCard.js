import * as React from 'react';

const ResultCard = ({repoName, lang, desc, stars, forks, dateCreated, fullName}) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    {/* <h1 className="card-title">Problem {id}</h1> */}
                    <h2>Repository Name: {repoName}</h2>
                    <h4>Language: {lang}</h4>
                    <p>Description: {desc}</p>
                    <p>Stars: {stars}</p>
                    <p>Forks: {forks}</p>
                    <p>Date Created: {dateCreated}</p>
                </div>
                <a href={"../repo/" + fullName} className="card-link"> </a>
            </div>
        </div>
    )
}

export default ResultCard;