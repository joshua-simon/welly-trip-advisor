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

  