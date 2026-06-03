import React, { useState } from "react";
import './App.css'
import { Toggle } from './components/Toggle';
import { useLocalStorage } from "usehooks-ts"; //From use-local-storage didnt work for me so i had to use usehooks-ts

const user = {
  name: 'Ricardo Losoya',
  about: 'Computer science student',
  imagePath: 'src/assets/Profile.jpg',
  imageSize: 90,
  linkedInImage: 'src/assets/linkedin-icon-free.png',
  linkedInLink: 'https://www.linkedin.com/in/ricardo-losoya-478507280/',
  githubImage: 'src/assets/github.png',
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
        src={user.imagePath}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
        <h1>{user.name}</h1>
        <p>{user.about}</p>
      </div>

      <div className="links">
        <div>
        <img src={user.linkedInImage} 
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
        <h1><a href={user.linkedInLink}>Check out my LinkedIn profile!!!</a></h1>
        </div>
        <div>
        <img src={user.githubImage} 
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
        <h1><a href={user.githubLink}>Check out my GitHub profile!!!</a></h1>
        </div>
      </div>
    </div>
  </>
  );
}

