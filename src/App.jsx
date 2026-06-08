import './App.css'
import { Toggle } from './components/Toggle';
import { useLocalStorage } from "usehooks-ts"; //From use-local-storage didnt work for me so i had to use
import profile from "./assets/Profile.jpg";
import linkedIn from "./assets/linkedin-icon-free.png"
import github from "./assets/github.png";
import resume from "./assets/resume.png"
import { useEffect } from "react";

const user = {
  name: 'Ricardo Losoya',
  about: 'Computer science student cross enrolled at Hartnell college and Csumb',
  location: 'Salinas, CA',
  pNumber: '(831) 905-7140',
  email: 'ricardolosoya1@gmail.com'
};

const images = {
  imagePath: profile,
  imageSize: 90,
  imageSize2: 70,
  linkedInImage: linkedIn,
  githubImage: github,
  resumeImage: resume,
};

const links = {
  linkedInLink: 'https://www.linkedin.com/in/ricardo-losoya-478507280/',
  githubLink: 'https://github.com/Periwinkle1225',
  resumeLink: 'https://drive.google.com/file/d/1quBznAl6ck9pgIz1HGWVonS4ZLh-8SFP/view?usp=drive_link'
};


export default function MyApp() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);
  return (
  <>
  <div className="App">
    <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
    <div className="header">
    </div>
    <div className="profile">
      <img
        className="avatar"
        src={images.imagePath}
        alt={'Photo of ' + user.name}
        style={{
          width: images.imageSize,
          height: images.imageSize
        }}
        />
        <h1>{user.name}</h1>
        <p className="about">{user.about}</p>
        <p className="location">{user.location}</p>
      </div>

      <div className="links">
        <a href={links.linkedInLink}>
        <div className="links2">
        <div className="container">
        <img src={images.linkedInImage} 
        style={{
          width: images.imageSize2,
          height: images.imageSize2
        }}
        />
        <h1>Check out my LinkedIn!!!</h1>
        </div>
        <div className="url">
        <p>{links.linkedInLink}</p>
        </div>
        </div></a>
        <a href={links.githubLink}>
        <div className="links2">
        <div className="container">
        <img src={images.githubImage} 
        style={{
          width: images.imageSize2,
          height: images.imageSize2
        }}
        />
        <h1>Check out my Github!!!</h1>
        </div>
        <div className="url">
        <p>{links.githubLink}</p>
        </div>
        </div></a>
        <a href={links.resumeLink}>
        <div className="links2">
        <div className="container">
        <img src={images.resumeImage} 
        style={{
          width: images.imageSize2,
          height: images.imageSize2
        }}
        />
        <h1>Check out my Resume!!!</h1>
        </div>
        <div className="url">
        <p>{links.resumeLink}</p>
        </div>
        </div></a>
      </div>
      <div className="footer">
        <p>{user.pNumber}</p>
        <p>{user.email}</p>
      </div>
  </div>
  </>
  );
}

