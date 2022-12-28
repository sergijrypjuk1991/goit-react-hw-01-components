import styled from 'styled-components';

export const Section = styled.section`
  border: 1px solid #000000;
  width: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  background-color: #f2f3f4;
  padding: 10px 0;
  margin: 0;
`;

export const StatList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  width: 100px;
  height: 100px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
`;