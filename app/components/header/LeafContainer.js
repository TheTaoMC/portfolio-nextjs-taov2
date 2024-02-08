import "./css.css";
//import "./css2.css";
import React, { useState, useEffect } from "react";

const Leaf = ({ left, rotate, size }) => {
  return (
    <div
      className="leaf"
      style={{
        left: `${left}%`,
        transform: `rotate(${rotate}deg)`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
};

const LeafContainer = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const numberOfLeaves = 5; // จำนวนใบไม้ที่ต้องการ
    const newLeaves = [];
    for (let i = 0; i < numberOfLeaves; i++) {
      setTimeout(() => {
        const left = Math.random() * 95; // สุ่มตำแหน่งตามแกน x
        const rotate = Math.random() * 360; // สุ่มการหมุนใบไม้
        const size = Math.random() * 20 + 10; // สุ่มขนาดใบไม้ (10px - 30px)
        setLeaves((prevLeaves) => [...prevLeaves, { left, rotate, size }]);
      }, Math.random() * 5000); // สุ่มเวลาเริ่มต้นการตก (0-5 วินาที)
    }
  }, []);

  return (
    <div className="leaf-container">
      {leaves.map((leaf, index) => (
        <Leaf
          key={index}
          left={leaf.left}
          rotate={leaf.rotate}
          size={leaf.size}
        />
      ))}
    </div>
  );
};

export default LeafContainer;
