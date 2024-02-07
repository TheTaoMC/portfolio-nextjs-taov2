"use client";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import useDeviceSize from "../useDeviceSize";

function AppHeader() {
  const [height] = useDeviceSize();

  console.log(height);

  const backgroundImageUrl =
    "url(https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/422595244_7313944191996107_7886726439985569006_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeFYy5h57JYFS4TP4RnUdbS6DMmchsOyWYwMyZyGw7JZjGbzxGenPyO2ANEY-XJmnsU4av1BJYtftJrQwnBAI3e3&_nc_ohc=Xi2MRZALgvcAX90k8GQ&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfCZ-pzxjWb0421PQwxWBxycaxy6ob-4BheUfJvy2PAUCw&oe=65C6935F)";

  return (
    <header>
      <div

        style={{
          height: `${height}px`,
          backgroundImage: `linear-gradient(rgba(253, 154 ,58,0.7), rgba(253, 154 ,58,0.7)), ${backgroundImageUrl}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          filter: "blur(10px)",
        }}
      ></div>
      {height && (
        <div className="text-white  font-bold absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10 text-center grid gap-4">
          <div>
            <img
              className="rounded-full"
              src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/426044313_7313946508662542_6925192157030077810_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHOQXIj7GjqmNGCcw2tlPvxlGtlyEgF5kaUa2XISAXmRqgUCghdgavDcBo81BitY4DT357UK6XazzYpuZF2pmTL&_nc_ohc=XJ-otF7wL-YAX8YP274&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfBInTM8baO7upuddQo-2CY5ufPHzBpm-Oh2nlOJdaQyuQ&oe=65C67E05"
              alt=""
              width={200}
            />
          </div>
          <div className="text-2xl">Manote Bunyoy</div>
          <div className="text-xl">Web Developer</div>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/TheTaoMC/">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a href="https://github.com/TheTaoMC">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default AppHeader;
