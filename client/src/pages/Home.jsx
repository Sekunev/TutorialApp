import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "http://127.0.0.1:8000/api/tutorials/";

  //? CRUD : (GET-READ) --> Mülakat-interview aksi belirtilmezse axios da ilk yapılan işlem get işlemidir. CRUD deki "R"yi yapmış olduk.
  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      // setTutorials den dolayı render-state (sonsuz döngü) durumu oluşmaması için getTutorials fonksiyonunu didmount-useeffect şeklinde tanımlamalıyız.
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //?didMound
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
