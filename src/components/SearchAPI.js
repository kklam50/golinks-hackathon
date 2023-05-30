import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";

const myRef = React.createRef();
const repoOwner = React.createRef();
const githubToken = "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";

var queryResults = [];
var test = "";
var queryString = "https://api.github.com/search/repositories?q=org:netflix&sort=stars&order=desc";

export default function SearchAPI() {
    const navigate = useNavigate();

    const showResults = (event) => {
        event.preventDefault();
        var queryString = "https://api.github.com/search/repositories?q=org:" + repoOwner.current.value + "&sort=stars&order=desc&per-page=100";
        navigate("/results/" + repoOwner.current.value, {state: {query: queryString}});
    }
    return (
        <>
            <div className="search">
                <form onSubmit={(showResults)}>
                    <h1>Search for Repo</h1>
                    <input ref={repoOwner} type="text" id="repo-query" className="searchbar"></input><br/><br/>
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        </>
    )
}