const handleError = (error) => (error.response && error.response.data.message
  ? error.response.data.message
  : error.message);

export default handleError;
