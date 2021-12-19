import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Poster } from "./Poster";
import StarRating from 'react-native-star-rating';

const API_KEY = "0a5c0d8acd8423f2bb24153b5937e1c7"

const Container = styled.ScrollView`
  margin-top: 63px;
  margin-left: 16px;
`;

const NowPContainer = styled.View`
margin-bottom: 40px;
`

const List = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
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
font-weight: 500;
margin-top: 10px;
margin-bottom: 5px;
`

const VContainer = styled.View`
margin-bottom: 40px;
`

const VDescWrap = styled.View`
display: flex;
flex-direction: column;
width: 100%;
margin-left: 16px;
`

const Coming = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const Date = styled.Text`
position: absolute;
bottom: 5px;
right: 20px;
color: #9A9A9A;
`


const Movies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
    ).json();
    setNowPlaying(results);
  };
  const getUpcoming = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      )
    ).json();
    setUpcoming(results);
  };
  const getPopular = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
    ).json();
    setPopular(results);
  };
  const getTopRated = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
    ).json();
    setTopRated(results);
  };

  const getData = async () => {
    await Promise.all([getNowPlaying(), getUpcoming(), getPopular(), getTopRated()]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <NowPContainer>
        <List>현재 상영중</List>
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
                starSize={10}
                maxStars={5}
                rating={movie.vote_average / 2}
                fullStarColor={'#F1C644'}
                emptyStarColor={'#C4C4C4'}
                starStyle={{marginRight:3}}
              />
            </Movie>
          ))}
        </NowPScroll>
      </NowPContainer>
      <VContainer>
      <List>개봉 예정</List>
      {upcoming.slice(0,3).map((movie) => (
      <Coming key={movie.id}>
        <Poster path={movie.poster_path}/>
        <VDescWrap>
            <Title>{movie.original_title}</Title>
            <StarRating
              disabled={true}
              starSize={10}
              maxStars={5}
              rating={movie.vote_average / 2}
              fullStarColor={'#F1C644'}
              emptyStarColor={'#C4C4C4'}
              containerStyle={{width:"15%"}}
            />
           </VDescWrap> 
           <Date>
            {movie.release_date}
          </Date>
      </Coming>))}
      </VContainer>
      <VContainer>
      <List>인기</List>
      {popular.slice(0,3).map((movie) => (
      <Coming key={movie.id}>
        <Poster path={movie.poster_path}/>
        <VDescWrap>
            <Title>{movie.original_title}</Title>
            <StarRating
              disabled={true}
              starSize={10}
              maxStars={5}
              rating={movie.vote_average / 2}
              fullStarColor={'#F1C644'}
              emptyStarColor={'#C4C4C4'}
              containerStyle={{width:"15%"}}
            />
          </VDescWrap> 
          <Date>
            {movie.release_date}
          </Date>
      </Coming>))}
      </VContainer>
      <VContainer>
      <List>높은 평점</List>
      {topRated.slice(0,3).map((movie) => (
      <Coming key={movie.id}>
        <Poster path={movie.poster_path}/>
        <VDescWrap>
            <Title>{movie.original_title}</Title>
            <StarRating
              disabled={true}
              starSize={10}
              maxStars={5}
              rating={movie.vote_average / 2}
              fullStarColor={'#F1C644'}
              emptyStarColor={'#C4C4C4'}
              containerStyle={{width:"15%"}}
            />
        </VDescWrap> 
        <Date>
          {movie.release_date}
        </Date>
      </Coming>))}
      </VContainer>
    </Container>
  )
};

export default Movies;