import { useNavigation } from "@react-navigation/native"
import styled from "styled-components/native";
import { Poster } from "./Poster";
import { Vote } from "./Vote";

const VWrap = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 16px;
`;

const VDescWrap = styled.View`
display: flex;
flex-direction: column;
width: 100%;
margin-left: 16px;
`

const Title = styled.Text`
font-size: 12px;
font-weight: 500;
margin-top: 10px;
margin-bottom: 5px;
`

const Date = styled.Text`
position: absolute;
font-size: 10px;
bottom: 5px;
right: 20px;
color: #9A9A9A;
`


const VScroll = ({ posterPath, originalTitle, rating, date, fullData}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      screen: "Detail",
      params: {
        ...fullData,
      }
    })
  }
  return (
    <VWrap onPress={goToDetail} >
      <Poster path={posterPath}/>
      <VDescWrap>
        <Title>{originalTitle}</Title>
        <Vote rating={rating} marginR="true" width="true"/>
      </VDescWrap> 
      <Date>{date}</Date>
    </VWrap>
  )
}

export default VScroll;




