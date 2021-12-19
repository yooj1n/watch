import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { ListTitle } from '../components/ListTitle';
import { makeImgPath, Poster } from '../components/Poster';
import { Vote } from '../components/Vote';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.View`
`;

const Top = styled.View`
height: ${SCREEN_HEIGHT / 3.5}px;
`;

const BG = styled.Image`
  
`;

const Blur = styled.View`
width: 100%;
height: 100%;
background-color: black;
position: absolute;
z-index: 1;
opacity: 0.6;
`

const PosterContainer = styled.View`
display: flex;
flex-direction: row;
position: absolute;
margin: 40% 0px 0px 16px;
`
const NameWrap = styled.View`
top : 8px;
left: 33%;
`
const Title = styled.Text`
 font-weight: 700;
 font-size: 14px;
margin-bottom: 5px;
`
const Date = styled.Text`
font-size: 12px;
color: #B9B9B9;
margin-bottom: 5px;
`


const DescWrap = styled.View`
padding-top: 40px;
padding-left: 16px;
`
const OverView = styled.Text`
line-height: 20px;
margin : 16px 16px 24px 0px;
color: #828282;
`
const VoteWrap = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`

const VoteNum = styled.Text`
color: #F1C644;
font-size: 12px;
margin-left: 6px;
`

const Detail = ({route : {params : {params}}}) => {
  return (
    <Container>
    <Top>
    <Blur />
    <BG
      style={StyleSheet.absoluteFill}
      source={{ uri: makeImgPath(params.backdrop_path || "") }}/>
    </Top>  
    <NameWrap>
      <Title>{params.original_title}</Title>
      <Date>{params.release_date} 발매</Date>
      <VoteWrap>
        <Vote rating={params.vote_average} marginR="true" width="true"/>
        <VoteNum>{params.vote_average}</VoteNum>
      </VoteWrap>
    </NameWrap>
    <PosterContainer>
      <Poster path={params.poster_path || ""} />
    </PosterContainer>
    <DescWrap>
      <ListTitle title="개요" />
      <OverView>{params.overview}</OverView>
      <ListTitle title="주요 출연진" />
      <ListTitle title="리뷰"/>
    </DescWrap>
    



  </Container>
  )
}

export default Detail;