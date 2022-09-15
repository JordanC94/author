import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Authors = () => {
  const baseUrl = 'http://localhost:8000/api/authors';
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setAuthors(res.data))
      .catch((error) => console.log(error));
  }, [authors]);

  return (
    <div className="col">
      <Outlet context={{ baseUrl, authors, setAuthors }} />
    </div>
  );
};

export default Authors;