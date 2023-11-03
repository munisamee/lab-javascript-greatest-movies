// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newListOfDirectors = moviesArray.map((film) => film.director);
  return newListOfDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter((movies) => {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    );
  });
  return spielbergDramas.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (movies.length === 0) {
    return 0;
  }

  const totalScore = movies.reduce((accumulator, movie) => {
    if (movie.score !== undefined) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  const averageScore = totalScore / movies.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalScore = dramaMovies.reduce((accumulator, movie) => {
    return accumulator + movie.score;
  }, 0);

  const averageScore = totalScore / dramaMovies.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = movies.slice();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
