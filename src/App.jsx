import React, { useState } from "react";
import './App.css'
import { Toggle } from './components/Toggle';
import { useLocalStorage } from "usehooks-ts"; //From use-local-storage didnt work for me so i had to use
import profile from "./assets/Profile.jpg";
import linkedIn from "./assets/linkedin-icon-free.png"
import github from "./assets/github.png";
import resume from "./assets/resume.png"

const user = {
  name: 'Ricardo Losoya',
  about: 'Computer science student',
};

const images = {
  imagePath: profile,
  imageSize: 90,
  linkedInImage: linkedIn,
  githubImage: github,
  resumeImage: resume
};

const links = {
  linkedInLink: 'https://www.linkedin.com/in/ricardo-losoya-478507280/',
  githubLink: 'https://github.com/Periwinkle1225'
};

export default function MyApp() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  
  return (
  <>
  <div className="App" data-theme={isDark ? "dark" : "light"}>
    <div className="header">
    <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
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
        <p>{user.about}</p>
      </div>

      <div className="links">
        <div>
        <img src={images.linkedInImage} 
        style={{
          width: images.imageSize,
          height: images.imageSize
        }}
        />
        <h1><a href={links.linkedInLink}>Check out my LinkedIn profile!!!</a></h1>
        </div>
        <div>
        <img src={images.githubImage} 
        style={{
          width: images.imageSize,
          height: images.imageSize
        }}
        />
        <h1><a href={links.githubLink}>Check out my GitHub profile!!!</a></h1>
        </div>
        <div>
        <img src={images.resumeImage} 
        style={{
          width: images.imageSize,
          height: images.imageSize
        }}
        />
        <h1></h1>
        </div>
      </div>
    </div>
  </>
  );
}

