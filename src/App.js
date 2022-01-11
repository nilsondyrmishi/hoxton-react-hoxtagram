import './App.css';
import {useState,useEffect} from "react";
import ImageCard from "./components/Main/imageCard";
function App() {

    const [image,setImage]= useState([])


    function getImageFromServer(){
        fetch("http://localhost:3000/images").then(r => r.json())
            .then(imgaesFromAPI=>setImage(imgaesFromAPI))
    }


    useEffect( () => {
                getImageFromServer()
            },[])
  return (
      <body>
      <img className="logo" src="assets/hoxtagram-logo.png"/>

      <section className="image-container">
          {image.map((image)=>

              <ImageCard key={image.id} comments={image.comments} />

          )}


      </section>
      </body>
  );
}

export default App;
