import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const Details = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { login } = useParams();
  

  console.log(1)
  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/details?username=brunamarcelabarreto`)
      .then(response => {
        console.log(response)
        setUserDetails(response.data.users.details);
      })
      .catch(error => console.log(error));
  }, [login]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <div>
      <h2>Details</h2>
      <ul>
        {userDetails.map((repo) => (
          <li key={repo.name}>
            <h3>{repo.name}</h3>
            <h3>{repo.email}</h3>
            <h3>{repo.bio}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};