import { GoArrowLeft } from 'react-icons/go';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Header = styled.header`
  background-color: #0d1117;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: white;
  align-items: center;
  font-size: 40px;
  font-weight: 150;
  margin-left: 10px;
`;

export const ReposListContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ReposItemContainer = styled.div`
  display: flex;
  border: 0.5px solid #484f58;
  justify-content: flex-start;
  align-items: center;
  width: 800px;
  padding: 25px;
  margin-bottom: 5px;
  background-color: #0d1117;
  border-radius: 5px;
  flex-direction: column;
  padding-top: 0.1px;
`;

export const Text = styled.span`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  color: white;
  margin: 5px;
  font-weight: 50;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100px;
`;

export const Button = styled.button`
  background-color: #0d1117;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const ButtonPage = styled.button`
  background-color: #0d1117;
  color: white;
  border: 0.5px solid #484f58;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  margin-top: 10px;
  margin-left: 10px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const ButtonBack = styled.button`
  border: none;
  background-color: #0d1117;
  cursor: pointer;

  &:hover {
    background-color: #0d1117;
  }
`;

export const BackIcon = styled(GoArrowLeft)`
  font-size: 20px;
  color: #484f58;
  padding: 5px;
  border-radius: 100%;
  background-color: transparent;
`;

export const HeaderIcon = styled(FaGithub)`
  background-color: #484f58;
  border-radius: 20px;
  margin-left: 350px;
`;

