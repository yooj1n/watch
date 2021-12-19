import React, { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Poster } from "../Poster";
import StarRating from 'react-native-star-rating';
import { useQuery } from "react-query";
import { nowPlaying, popular, topRated, upcoming } from "../api";


const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

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

const VContainer = styled.View`
margin-bottom: 40px;
`

const VDescWrap = styled.View`
display: flex;
flex-direction: column;
width: 100%;
margin-left: 16px;
`

const VWrap = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 16px;
`;

const Date = styled.Text`
position: absolute;
font-size: 10px;
bottom: 5px;
right: 20px;
color: #9A9A9A;
`


const Movies = ({navigation : {navigate}}) => {
  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery(
    "nowPlaying",
    nowPlaying
  );
  const { isLoading: upcomingLoading, data: upcomingData } = useQuery(
    "upcoming",
    upcoming
  );
  const { isLoading: popularLoading, data: popularData } = useQuery(
    "popular",
    popular
  );
  const { isLoading: topRatedLoading, data: topRatedData } = useQuery(
    "topRated",
    topRated
  );

  const loading = nowPlayingLoading || upcomingLoading || popularLoading || topRatedLoading;

  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <Container>
      <NowPContainer>
        <List>현재 상영중</List>
        <NowPScroll 
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {nowPlayingData.results.map(
            (movie) => (
            <Movie onPress={() => navigate("Detail")} key={movie.id}>
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
      {upcomingData.results.slice(0,3).map((movie) => (
      <VWrap onPress={() => navigate("Detail")} key={movie.id}>
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
      </VWrap>))}
      </VContainer>
      <VContainer>
      <List>인기</List>
      {popularData.results.slice(0,3).map((movie) => (
      <VWrap onPress={() => navigate("Detail")} key={movie.id}>
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
      </VWrap>))}
      </VContainer>
      <VContainer>
      <List>높은 평점</List>
      {topRatedData.results.slice(0,3).map((movie) => (
      <VWrap onPress={() => navigate("Detail")} key={movie.id}>
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
      </VWrap>))}
      </VContainer>
    </Container>
  )
};

export default Movies;