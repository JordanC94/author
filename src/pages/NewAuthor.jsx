import { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const NewAuthor = () => {
  const navigate = useNavigate();
  const { baseUrl } = useOutletContext();
  const [errorObject, setErrorObject] = useState({})

  const initialAuthor = {
    name: ""
  };

  const insertAuthor = (e, author) => {
    e.preventDefault();
    axios
      .post(baseUrl, author)
      .then(() => {
        navigate('/authors');
      })
      .catch((error) => {
        console.log(error);
        const errorResponse = error.response.data.errors;
        const errorObj = {}
        for (const key in errorResponse) {
          errorObj[key] = errorResponse[key].message
        }
        setErrorObject(errorObj);
      });
  };

  return (
    <AuthorForm
      formText={'Add Author'}
      submitHandler={insertAuthor}
      initialAuthor={initialAuthor}
      errorObject={errorObject}
    />
  );
};

export default NewAuthor;