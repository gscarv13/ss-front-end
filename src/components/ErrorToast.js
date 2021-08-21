import PropType from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorToast = ({ error }) => (
  <ToastContainer>
    {
      toast(error, {
        className: 'error-toast',
      })
    }
  </ToastContainer>
);

ErrorToast.propTypes = {
  error: PropType.string.isRequired,
};

export default ErrorToast;
