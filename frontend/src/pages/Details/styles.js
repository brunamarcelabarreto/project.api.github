import styled from 'styled-components';

export const Header = styled.header`
  background-color: #0d1117;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: white;
  align-items: center;
  font-size: 40px;
  font-weight: 150;
  margin-left: 10px;
`;

export const DetailListContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const DetailItemContainer = styled.div`
  display: flex;
  width: 500px;
  padding: 15px;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
  border: 0.5px solid #484f58;
  justify-content: flex-start;
  padding: 5px;
  margin-bottom: 5px;
  background-color: #0d1117;
  border-radius: 5px;
`;

export const Text = styled.span`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  color: white;
  margin: 10px 10px 10px 0;
  display: flex;
  justify-content: center;
  margin:auto;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
`;



