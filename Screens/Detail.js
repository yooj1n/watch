import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { ListTitle } from '../components/ListTitle';
import { makeImgPath, Poster } from '../components/Poster';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.View`
`;

const Top = styled.View`
height: ${SCREEN_HEIGHT / 3.5}px;
`;

const BG = styled.Image`
  
`;


const PosterContainer = styled.View`
position: absolute;
margin: 40% 0px 0px 16px;
`

const DescWrap = styled.View`
padding-top: 20px;
`
const OverView = styled.Text`
line-height: 20px;
margin : 16px 16px 24px 0px;
color: #828282;
`

const Detail = ({route : {params : {params}}}) => {
  return (
    <Container>
    <Top>
    <BG
      style={StyleSheet.absoluteFill}
      source={{ uri: makeImgPath(params.backdrop_path || "") }}/>
    </Top>  
    <PosterContainer>
      <Poster path={params.poster_path || ""} />
      <DescWrap>
        <ListTitle title="개요" />
        <OverView>{params.overview}</OverView>
        <ListTitle title="주요 출연진" />
        <ListTitle title="리뷰"/>
      </DescWrap>
    </PosterContainer>



  </Container>
  )
}

export default Detail;