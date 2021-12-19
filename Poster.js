import styled from "styled-components";

const Image = styled.Image`
  width: 104px;
  height: 160px;
  border-radius: 8px;
  background-color: black;
`;

export const makeImgPath = (path) =>
  `https://image.tmdb.org/t/p/w500/${path}`;

export const Poster = ({ path }) => (
    <Image source={{ uri: makeImgPath(path)}} />
  );