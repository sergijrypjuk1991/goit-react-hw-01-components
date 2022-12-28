import styled from 'styled-components';

export const Card = styled.div`
  background-color: rgba(45, 123, 200, 0.2);
  width: 300px;
  margin: 15px auto;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.5) 3px 5px 5px 2px;
`;

export const Description = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const Img = styled.img`
  width: calc(100% / 2);
  border-radius: 50%;
`;
export const UserName = styled.p`
  margin: 10px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.25;
  color: #212121;
`;

export const Tag = styled.p`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.05;
  color: #808080;
  margin: 10px;
`;
export const Location = styled.p`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.05;
  color: #808080;
  margin: 10px;
`;
export const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  background-color: #f4f3f2;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const Label = styled.span`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.05;
  color: #808080;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.25;
  color: #212121;
`;