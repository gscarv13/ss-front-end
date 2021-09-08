const formatDate = (date) => {
  const day = date.getDate().toString().length < 2 ? `0${date.getDate()}` : date.getDate();
  let month = date.getMonth() + 1;
  month = month.toString().length < 2 ? `0${month}` : month;
  const year = date.getFullYear();

  return `${year}/${month}/${day}`;
};

export default formatDate;
