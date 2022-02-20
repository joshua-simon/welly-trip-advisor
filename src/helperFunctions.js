export const convertToStars = (stars) => {
    const num = parseInt(stars);
    const star = <i>★</i>;
    const arr = [];
    for (let i = 0; i <= num; i++) {
      if (arr.length < num) {
        arr.push(star);
      }
    }
    return arr;
  }

export const getAverageRating = (rating) => {
    const ratingInt = rating.map(item => parseInt(item))
    const ratingSum = ratingInt.reduce((x,y) => x+y)
    const ratingAve = Math.round(ratingSum/rating.length)
    return ratingAve
  }

  