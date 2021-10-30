import React from "react";
import Links from "./Links"
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio || props.bio === "" ? <p>{user.bio}</p>:null}
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links
       github={user.links.github} linkedin={user.links.linkedin}
      />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
