const getFormatedGenresDescription = (genres) => {
  if (genres.length === 2) {
    return `${genres[0]} & ${genres[1]}`;
  } else if (genres.length >= 3) {
    return genres.reduceRight((accumulator, currentValue, index) => {
      let newValue = accumulator + currentValue;
      if (index === 0) {
        return newValue;
      }
      return `${newValue}, `;
    }, "");
  } else {
    return genres[0];
  }
};

export { getFormatedGenresDescription };
