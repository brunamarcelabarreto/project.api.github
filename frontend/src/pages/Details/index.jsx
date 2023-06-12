import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { DetailItemContainer, DetailListContainer, Text, Header, Title, ButtonContainer, ButtonPage } from './styles';
import { useNavigate } from 'react-router-dom';
import { HeaderIcon } from "../Home/styles";

export const Details = () => {
  const [userDetails, setUserDetails] = useState([]);
  const navigate = useNavigate();

  const { login } = useParams();

  useEffect(() => {
    axios.get(`https://challenge-api-sxr2.onrender.com/api/details/${login}`)
      .then(response => {
        console.log(response);
        setUserDetails(response.data);
      })
      .catch(error => console.log(error));
  }, [login]);


  return (
    <>
      <Header>
        <HeaderIcon size={40} />
        <Title>User Details</Title>
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
      <ButtonPage onClick={() => navigate(-1)}>Back</ButtonPage>
      </ButtonContainer>
      </DetailListContainer>
    </>
  );
};