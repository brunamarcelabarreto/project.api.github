import styled from 'styled-components';

export const Header = styled.header`
  background-color: #f5f5f5;
  height: 60px;
  display: flex;
  width: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1 20px;
  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: black;
  align-items: center;
  font-size: 50px;
`;

export const DetailListContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const DetailItemContainer = styled.div`
  display: flex;
  width: 600px;
  padding: 15px;
  margin-bottom: 5px;
  background-color: #f5f5f5;
  border-radius: 5px;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
`;

export const Text = styled.span`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  color: black;
  margin: 10px 10px 10px 0;
  display: flex;
  justify-content: center;
  margin:auto;
`;

export const Button = styled.button`
  background-color: grey;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
`;



