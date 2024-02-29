import GoogleImage from './assets/google_apps.svg'
import ProfilePicture from './assets/luffy.jpg'

function Header() {

  const imgMenu = {
    filter: "invert(1)",
    height: "1.3rem",
    cursor: "pointer",
  }

  const profileImg = {
    height: "100%",
    width: "100%",
  }

  const navBtn = {
    fontSize: "0.8rem",
  }


  return (
    <>
      <nav>
        <ul>
          <li><a style={navBtn} href="#">Gmail</a></li>
          <li><a style={navBtn} href="#">Images</a></li>
          <li><img style={imgMenu} src={GoogleImage} alt="Google apps" /></li>
          <li>
            <div className="profile-container">
              <img style={profileImg} src={ProfilePicture} alt="Profile picture" />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header