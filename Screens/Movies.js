import { ActivityIndicator, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { nowPlaying, popular, topRated, upcoming } from "../api";
import HScroll from "../components/HScroll";
import { ListTitle } from "../components/ListTitle";
import VScroll from "../components/VScroll";


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

const NowPScroll = styled.ScrollView`
    margin-top: 16px;
`

const VContainer = styled.View`
margin-bottom: 40px;
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
        <ListTitle title="현재 상영중" />
        <NowPScroll 
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {nowPlayingData.results.map(
            (movie) => (
              <HScroll 
                key={movie.id}
                posterPath={movie.poster_path} 
                rating={movie.vote_average} 
                originalTitle={movie.original_title} 
                fullData={movie}/>
          ))}
        </NowPScroll>
      </NowPContainer>
      <VContainer>
      <ListTitle title="개봉 예정" />
      {upcomingData.results.slice(0,3).map((movie) => (
        <VScroll 
          key={movie.id} 
          posterPath={movie.poster_path} 
          rating={movie.vote_average} 
          originalTitle={movie.original_title} 
          date={movie.release_date}
          fullData={movie}
        />
      ))}
      </VContainer>
      <VContainer>
      <ListTitle title="인기" />
      {popularData.results.slice(0,3).map((movie) => (
        <VScroll 
          key={movie.id} 
          posterPath={movie.poster_path} 
          rating={movie.vote_average} 
          originalTitle={movie.original_title} 
          date={movie.release_date}
          fullData={movie}
        />
      ))}
      </VContainer>
      <VContainer>
      <ListTitle title="높은 평점" />
      {topRatedData.results.slice(0,3).map((movie) => (
        <VScroll 
          key={movie.id} 
          posterPath={movie.poster_path} 
          rating={movie.vote_average} 
          originalTitle={movie.original_title} 
          date={movie.release_date}
          fullData={movie}
        />
      ))}
      </VContainer>
    </Container>
  )
};

export default Movies;