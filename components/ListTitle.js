import styled from "styled-components/native";


const List = styled.Text`
font-size: 20px;
font-weight: 700;
line-height: 29px;
`;

export const ListTitle = ({title}) => {
  return (
    <List>{title}</List>
  )
}