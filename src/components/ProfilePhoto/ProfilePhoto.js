import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImageToContainer, addImageToProfile } from '../../store/reducer';
import './ProfilePhoto.css';

function ProfilePhoto() {

  const image = useSelector((state) => state.imagesList.profile);
  const dispatch = useDispatch();
  const selectedImage = useRef();

  const onChangeHandler = () => {
    if (image) {
      dispatch(
        addImageToContainer()
      )
    }

    const file = selectedImage.current.files[0];
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      dispatch(
        addImageToProfile(filereader.result)
      );
    }
  }

  return(
    <div className="profile-photo">
      { image ? <img className="profile-photo--image" alt="profile_photo" src={ image }></img> : 
        <div className="profile-photo--image-alt"></div> } 
      <form>
        <input type="file" accept='image' onChange={ onChangeHandler } ref={ selectedImage }></input>
      </form>
    </div>
  )
}

export default ProfilePhoto;
