"use client";
import React from "react";

function AppAbout() {
  return (
    <section className="hero">
      <div className="m-10 flex justify-center">
        <div className="text-5xl">About Me</div>
      </div>

      <div className="w-[90%] m-auto grid xl:grid-cols-[30%_70%] xs:text-xl  md:text-2xl">
        <div className="">
          <div className="grid grid-cols-[30%_70%]">
            <div className="grid gap-5">
              <div>Name : </div>
              <div>Phone : </div>
              <div>Email : </div>
              <div>Website : </div>
              <div>Address : </div>
            </div>
            <div className="grid gap-5">
              <div>Manote Bunyoy </div>
              <div>088-7858180</div>
              <div>m.bunyoy@emali.com</div>
              <div>
                <a href="https://www.thetaomc.xyz">www.thetaomc.xyz</a>
              </div>
              <div>อ่อนนุช</div>
            </div>
          </div>
        </div>
        <hr className="mt-4 xl:hidden" />
        <div className="mt-4 xl:mt-0">
          <div className="mb-10">
            สวัสดีครับ ผมชื่อ เต๋า เป็นนักพัฒนาเว็บมืออาชีพประจำกรุงเทพมหานคร
            ประเทศไทย
          </div>
          <div className="mb-10">
            ผมเริ่มเขียนโปรแกรมตั้งแต่สมัยเรียนมัธยมปลาย
            และหลงใหลในเสน่ห์ของการสร้างสรรค์เว็บไซต์ตั้งแต่นั้นมา
            ผมสนุกกับการแก้ปัญหาและสร้างเว็บไซต์ที่ใช้งานง่าย สวยงาม
            และมีประสิทธิภาพ
          </div>
          <div className="mb-10">
            ผมมีความเชี่ยวชาญในด้าน:
            <li>
              Front-end Development: เขียนโค้ด ReactJS,NextJS,Tailwind CSS และ
              Primereact เพื่อสร้างหน้าเว็บที่สวยงามและใช้งานง่าย
            </li>
            <li>
              Back-end Development: เขียนโค้ด Express - Node.js, DB MySQL
              เพื่อจัดการ logic ของเว็บไซต์
            </li>
            <li>
              Full-stack Development: ทำงานได้ทั้งฝั่ง Front-end และ Back-end
            </li>
            <li>
              Responsive Web Design:
              พัฒนาเว็บไซต์ที่สามารถแสดงผลได้อย่างสวยงามบนอุปกรณ์ทุกชนิด
            </li>
            <li>SEO: ปรับแต่งเว็บไซต์ให้ติดอันดับบนหน้าค้นหา</li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppAbout;
