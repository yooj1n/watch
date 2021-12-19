import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Poster } from "./Poster";
import StarRating from 'react-native-star-rating';

const API_KEY = "0a5c0d8acd8423f2bb24153b5937e1c7"

const Container = styled.ScrollView`
  margin-left: 16px;
`;

const NowPText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  margin-top: 43px;
`;

const NowPScroll = styled.ScrollView`
    margin-top: 16px;
`

const Movie = styled.View`
  margin-right: 17px;
  align-items: center;
`;

const Title = styled.Text`
font-size: 12px;
margin-top: 10px;
margin-bottom: 5px;
`
const Vote = styled.Text``


const Movies = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
    ).json();
    setNowPlaying(results);
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
  return (
    <Container>
      <NowPText> 현재 상영중</NowPText>
      <NowPScroll 
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {nowPlaying.map(
          (movie) => (
          <Movie key={movie.id}>
            <Poster path={movie.poster_path} />
            <Title>
              {movie.original_title.slice(0, 13)}
              {movie.original_title.length > 13 ? "..." : null}
            </Title>
            <StarRating
              disabled={true}
              starSize={9}
              maxStars={5}
              rating={movie.vote_average / 2}
              fullStarColor={'#F1C644'}
              emptyStarColor={'#F1C644'}
            />
          </Movie>
        ))}
      </NowPScroll>
    </Container>
  )
};

export default Movies;