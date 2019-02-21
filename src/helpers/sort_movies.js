export default (movieList, sortParam) => {
  return(
    movieList.slice().sort((movie1, movie2) => {
      if (sortParam === 'title') {
        return movie1.title.localeCompare(movie2.title);
      }
      if (sortParam === 'year') {
        return movie1.release_date < movie2.release_date ? 1 : -1;
      }
      return movie1.vote_average < movie2.vote_average ? 1 : -1;
    })
  )
}