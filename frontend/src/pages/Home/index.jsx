import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserListContainer, UserItemContainer, Username, ButtonContainer, Button, ButtonPage, Header, Title} from './styles';

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, totalUsers: 0, totalPages: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://challenge-api-sxr2.onrender.com/api/users?page=${pagination.page}&limit=${pagination.limit}`)
      .then(response => {
        console.log(response)
        setUsers(response.data.users);
        setPagination(response.data.pagination);
      })
      .catch(error => console.log(error));
  }, [pagination.page, pagination.limit]);

  return (
    <>
    <Header>
    <Title>List of Github Users</Title>
    </Header>
    <UserListContainer>
      {users?.map(user => (
        <UserItemContainer key={user.id}>
          <Username>User ID: {user.id}</Username>
          <Username>Login: {user.login}</Username>
          <ButtonContainer>
            <Button onClick={() => navigate(`/details/${user.login}`)}>Details</Button>
            <Button onClick={() => navigate(`/repos/${user.login}`)}>Repositories</Button>
          </ButtonContainer>
        </UserItemContainer>
      ))}
      <ButtonContainer>
        <ButtonPage onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })} disabled={pagination.page === 1}>Previous</ButtonPage>
        <ButtonPage onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })} disabled={pagination.page === pagination.totalPages}>Next</ButtonPage>
      </ButtonContainer>
    </UserListContainer>
    </>
  )
}


