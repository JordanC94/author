import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';

const AllAuthors = () => {
  const { baseUrl, authors } = useOutletContext();

  const deleteAuthor = (id) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors &&
          authors.map((author) => {
            return (
              <tr key={author._id}>
                <td>
                  <Link to={`/authors/${author._id}`}>{author.name}</Link>
                </td>
                <td className="text-end">
                  <Link
                    to={`/authors/${author._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteAuthor(author._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllAuthors;