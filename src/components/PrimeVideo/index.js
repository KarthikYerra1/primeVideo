import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="app-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="pv-image"
        />
        <div className="movies-container">
          <h1 className="genre-heading">Action Movies</h1>
          <div className="slider-container">
            <MoviesSlider details={actionMovies} />
          </div>
          <h1 className=" genre-heading"> Comedy Movies</h1>
          <MoviesSlider details={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
