import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const Repos = () => {
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { login } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/repos?username=${login}`)
    .then((response) => {
      console.log(response.data);
      setUserRepos(response.data);
      setLoading(false);
    })
  }, [login]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Repositories for {login}:</h2>
      <ul>
        {userRepos.map((repo) => (
          <li key={repo.name}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};