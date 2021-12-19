import styled from "styled-components";

const Image = styled.Image`
  width: 104px;
  height: 160px;
  border-radius: 8px;
`;

export const makeImgPath = (img) =>
  `https://image.tmdb.org/t/p/w500${img}`;

export const Poster = ({ path }) => (
    <Image source={{ uri: makeImgPath(path) }} />
  );