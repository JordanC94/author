import { useState } from 'react';

const AuthorForm = (props) => {
  const { submitHandler, intialAuthor, errorObject } = props;
  const [ formState, setFormState ] = useState({name:''});

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e, formState)}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={changeHandler}
            />
            {errorObject.name ? (
              <span>{errorObject.name}</span>
            ) : (
              ''
            )}
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-sm">Add Author</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthorForm;
