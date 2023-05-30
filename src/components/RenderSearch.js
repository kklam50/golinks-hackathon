import {useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ResultCard from "./ResultCard";

const githubToken = "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";

export default function RenderSearch() {
    const [data, setData] = useState(null);
    const location = useLocation();

    var queryResults = [];
    var queryString = location.state.query;

    useEffect(() => {
        fetch(queryString, {
            headers: {
                "Authorization": `token ${githubToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    var items = []

    if (data != null) {
        console.log(data.items)
        items = data.items
    }
    // console.log(data)
    let resultCards = [];

    for (var i = 0; i < items.length; i++) {
        resultCards.push(<ResultCard
                            repoName={items[i].name}
                            lang={items[i].language}
                            desc={items[i].description}
                            stars={items[i].stargazers_count} // not too sure if this is the correct one
                            forks={items[i].forks_count}
                            dateCreated={items[i].created_at}
                            fullName={items[i].full_name}/>)
    }

    return (
        <div>
            <h1>Search Results</h1>
            <div className="card-row"> 
                {resultCards.map((item) => (
                    item
                ))}
            </div>
        </div>
    )
}

// export default ShowResults;