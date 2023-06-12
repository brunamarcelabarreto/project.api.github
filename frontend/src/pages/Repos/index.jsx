import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ReposListContainer, ReposItemContainer, ButtonContainer, ButtonPage, Header, Title, Text, Link, BackIcon, ButtonBack } from './styles';
import { useNavigate } from 'react-router-dom';
import { HeaderIcon } from "../Repos/styles";

export const Repos = () => {
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { login } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://challenge-api-sxr2.onrender.com/api/repos/${login}`)
      .then((response) => {
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
    <>
      <Header>
        <ButtonBack onClick={() => navigate(-1)}>
          <BackIcon size={40}/>
        </ButtonBack>
        <HeaderIcon size={40} />
        <Title>Repositories for {login}</Title>
      </Header>
      <ReposListContainer>
        {userRepos?.map((repo) => (
          <ReposItemContainer>
            <Title key={repo.name}>{repo.name}
            </Title>
            <Text>Id: {repo.id}</Text>
            <Link href={repo.url} target="_blank" rel="noopener noreferrer">
              <Text>{repo.url}</Text>
            </Link>
          </ReposItemContainer>
        ))}
        <ButtonContainer>
          <ButtonPage onClick={() => navigate(-1)}>Back</ButtonPage>
        </ButtonContainer>
      </ReposListContainer></>
  );
};