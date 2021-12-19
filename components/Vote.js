import StarRating from 'react-native-star-rating';

export const Vote = ({rating, marginR, width}) => {
  return (
    <StarRating
                disabled={true}
                starSize={10}
                maxStars={5}
                rating={rating / 2}
                fullStarColor={'#F1C644'}
                emptyStarColor={'#C4C4C4'}
                starStyle={{marginRight: marginR ? 3 : 0}}
                containerStyle={{width: width ? "15%" : "false" }}
      />
  )
};