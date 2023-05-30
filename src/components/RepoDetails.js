import {useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const githubToken = "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";

export default function RepoDetails() {
    const [data, setData] = useState(null);
    const location = useLocation();

    var splitURL = location.pathname.split("/");
    var name = splitURL[splitURL.length - 2] + "/" + splitURL[splitURL.length - 1];

    console.log(name);

    var queryResults = [];
    // var queryString = location.state.query;
    var queryString = "https://api.github.com/search/commits?q=repo:" + name;
    console.log("query: " + queryString);

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
    console.log(items);

    return (
        <>
            <p>details page for {name}</p>
        </>
    )
}