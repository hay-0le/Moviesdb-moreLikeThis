import React from 'react';
import styled from 'styled-components';

const MoviesDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 246px;
  height: 238px;
`
const Movie = styled.div`
  width: 30%;
  margin: auto;

`

function Movies (props) {
  var movies = props.movies;

  return (
    <MoviesDiv>
      {[...movies].map((movie, i) =>
        <Movie>
          <img src={(movie.pictureURL)} height="113" width="76" />
        </Movie>
      )}
    </MoviesDiv>
  )
}

export default Movies;