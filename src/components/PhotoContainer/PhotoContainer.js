import { useSelector } from "react-redux";
import './PhotoContainer.css';

function PhotoContainer() {
  const imageList = useSelector(state => state.imagesList.container);

  return(
    <div className="photo-container">
      { imageList ? imageList.map(image => <img className="photo" alt="profile_photo" src={image} />) :
      null }
    </div>
  )
}

export default PhotoContainer;
