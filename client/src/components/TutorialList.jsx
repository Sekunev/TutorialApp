import { AiOutlineEdit } from "react-icons/ai";
import { IoTrashSharp } from "react-icons/io5";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

// silme işlemi oluyor ama TutorialList render edilmediği için listede silinen öge kalmaya devam ediyor bu sorunu önlemek için TutorialList'e ikinci parametreyi verelim.
const TutorialList = ({ tutorials, getTutorials }) => {
  const [editItem, setEditItem] = useState([]);

  //! DELETE (CRUD-Delete)
  const deleteTutorial = async (id) => {
    // const url = "http://127.0.0.1:8000/api/tutorials";
    const url = "https://sekune.pythonanywhere.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}/`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  //! PUT (CRUD-Update)
  //! PUT: Whole Update (tamamını güncelleme), PATCH: Partially Update (parçalı güncelleme)
  // const editTutorial = async (id, title, description) => {
  //   const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  //   try {
  //     await axios.put(`${url}/${id}`, { title, description });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   getTutorials();
  // };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {/* optional chaining --> tutorials varsa map'a gir. */}
          {tutorials.length > 0 &&
            tutorials?.map((item) => {
              const { id, title, description } = item;
              return (
                <tr key={id}>
                  <th>{id}</th>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td className="text-center text-nowrap">
                    <AiOutlineEdit
                      onClick={() => setEditItem(item)}
                      data-bs-toggle="modal"
                      data-bs-target="#edit-modal"
                      size={32}
                      type="button"
                      className="me-2 text-success"
                    />

                    <IoTrashSharp
                      onClick={() => deleteTutorial(id)}
                      size={32}
                      type="button"
                      className="text-danger "
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <EditTutorial editItem={editItem} getTutorials={getTutorials} />
    </div>
  );
};

export default TutorialList;
