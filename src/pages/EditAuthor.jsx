import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => {
        setAuthor(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const updateAuthor = (e, author) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/${id}`, author)
      .then(() => navigate('/authors'))
      .catch((error) => console.log(error));
  };

  return (
    author && <AuthorForm formText={'Edit Author'} submitHandler={updateAuthor} initialAuthor={author} errorObject = {{}} />
  );
};

export default EditAuthor;