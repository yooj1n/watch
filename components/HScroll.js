import { useNavigation } from "@react-navigation/native"
import StarRating from "react-native-star-rating";
import styled from "styled-components/native";
import { Poster } from "./Poster";


const Movie = styled.TouchableOpacity`
  margin-right: 17px;
  align-items: center;
`;

const Title = styled.Text`
font-size: 12px;
font-weight: 500;
margin-top: 10px;
margin-bottom: 5px;
`

const HScroll = ({ posterPath, originalTitle, rating, fullData}) => {
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
    <Movie onPress={goToDetail}>
      <Poster path={posterPath} />
      <Title>
        {originalTitle.slice(0, 13)}
        {originalTitle.length > 13 ? "..." : null}
      </Title>
      <StarRating
        disabled={true}
        starSize={10}
        maxStars={5}
        rating={rating / 2}
        fullStarColor={'#F1C644'}
        emptyStarColor={'#C4C4C4'}
        starStyle={{marginRight:3}}
      />
    </Movie>
  )
}

export default HScroll;
