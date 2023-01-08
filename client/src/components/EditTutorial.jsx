import axios from "axios";
import React, { useEffect, useState } from "react";

const EditTutorial = ({ getTutorials, editItem }) => {
  const { id, title: newTitle, description: newDescription } = editItem;
  const [title, setTitle] = useState(newTitle);
  const [description, setDescription] = useState(newDescription);

  //? https://reactjs.org/docs/hooks-reference.html#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz.

  //? componentDidUpdate
  //? newTitle veya description her degistiginde local title ve
  //? description state'lerimizi gunceliyoruz.
  // Aşağıdaki useEffect-dimountUpdate özelliği kullanıldı. Yani title ve description her değiştiğinde render yapılacak.
  useEffect(() => {
    setTitle(newTitle);
    setDescription(newDescription);
    // eslint-disable-next-line
  }, [newTitle, newDescription]);

  //! Update (PUT:Whole Update,PATCH :Partially Update)
  const editTutorial = async (id, tutor) => {
    const url = "http://127.0.0.1:8000/api/tutorials";
    try {
      await axios.put(`${url}/${id}/`, tutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTutorial(id, { title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="input-group mb-3 p-3 d-flex flex-column">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <label htmlFor="basic-url" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={title || ""}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>

                <div className="">
                  <label htmlFor="basic-url" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={description || ""}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    required
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
