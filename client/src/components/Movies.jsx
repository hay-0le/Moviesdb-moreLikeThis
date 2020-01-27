import React from 'react';
import { MoviesDiv, Movie} from "./componentStyling/MovieStyling.js";
import ImageLoader from 'react-load-image';

function Movies (props) {
  var movies = props.movies;
  var click = props.click;

  return (
    <MoviesDiv>
      {[...movies].map((movie, i) =>

        <Movie key={i} onClick={click}>
          <ImageLoader src={(movie.pictureURL)}>
            <img id={movie._id}  height="113" width="76" />
            <div>Error Loading Image</div>
            <img src="../imageLoading.png" height="113" width="76"/>
          </ImageLoader>
        </Movie>
      )}
    </MoviesDiv>
  )
}

export default Movies;
