import {useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CommitCard from './CommitCard';

const githubToken = "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";

export default function RepoDetails() {
    const [data, setData] = useState(null);
    const location = useLocation();

    var splitURL = location.pathname.split("/");
    var name = splitURL[splitURL.length - 2] + "/" + splitURL[splitURL.length - 1];

    // console.log(name);

    var queryString = "https://api.github.com/repos/" + name + "/commits?q=per_page=100";
    // var queryString = "https://api.github.com/repos/octocat/Spoon-Knife/commits"
    // console.log("query: " + queryString);

    var commits = [];
    useEffect(() => {
        fetch(queryString, {
            headers: {
                "Authorization": `token ${githubToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        .then(response => response.json())
        .then(json => {
            setData(json)
            // console.log(data)
        })
    }, [])

    if (data != null) {
        // console.log(data.items)
        // items = data.items
        commits = data
    }
    console.log(commits);

    let commitCards = [];

    for (var i = 0; i < commits.length; i++) {
        commitCards.push(<CommitCard
                            message={commits[i].commit.message} 
                            // username={commits[i].committer.login} 
                            username={commits[i].commit.author.name} 
                            hash={commits[i].sha} 
                            dateCreated={commits[i].commit.author.date}/>)
    }

    return (
        <div>
            <p>details page for {name}</p>
            {/* <div className="card-row">
                {commitCards.map((item) => {
                    item
                })}
            </div> */}
            {/* {commitCards[0]} */}
        </div>
    )
}