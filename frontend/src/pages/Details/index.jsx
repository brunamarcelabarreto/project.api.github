import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { DetailItemContainer, DetailListContainer, Text, Header, Title, Button, ButtonContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export const Details = () => {
  const [userDetails, setUserDetails] = useState([]);
  console.log(userDetails);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useParams();

  console.log(1)
  useEffect(() => {
    axios.get(`http://localhost:3000/api/details/${login}`)
      .then(response => {
        console.log(response);
        setUserDetails(response.data);
      })
      .catch(error => console.log(error));
  }, [login]);


  return (
    <>
      <Header>
        <Title>List of Github Users</Title>
      </Header>
      <DetailListContainer>
        <DetailItemContainer>
          <Text>ID: {userDetails.id}</Text>
        </DetailItemContainer>
        <DetailItemContainer>
          <Text>{userDetails.login}</Text>
        </DetailItemContainer>
        <DetailItemContainer>
          <Text>{userDetails.html_url}</Text>
        </DetailItemContainer>
        <DetailItemContainer>
          <Text>Created in: {userDetails.created_at}</Text>
        </DetailItemContainer>
      <ButtonContainer>
      <Button onClick={() => navigate(-1)}>Back</Button>
      </ButtonContainer>
      </DetailListContainer>
    </>
  );
};