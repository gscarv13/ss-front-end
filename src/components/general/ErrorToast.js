import PropType from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const ErrorToast = ({ error }) => {
  useEffect(() => {
    toast(error, {
      className: 'error-toast',
    });
  }, [error]);
  return <ToastContainer />;
};

ErrorToast.propTypes = {
  error: PropType.string.isRequired,
};

export default ErrorToast;
