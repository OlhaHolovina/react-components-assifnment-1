import profileImg from '../../img/olha_holovina_pict.jpg';
import './style.css'

function ProfileImg() {
  return (
    <aside>
      <img src={profileImg} alt="Olha Holovina" className='profile-img' />
    </aside>
  );
}

export default ProfileImg;