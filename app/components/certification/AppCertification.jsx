"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function AppCertification() {
  return (
    <section>
      <div className="m-10 flex justify-center">
        <div className="text-5xl">Certifications</div>
      </div>

      <div className="w-[90%] m-auto flex justify-center gap-2 flex-wrap">
        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">2023</div>
            <div className="text-base font-bold">
              React Exercises by W3school
            </div>
            <div className="text-sm font-bold">
              <div>Test React skills with W3Schools Exercises.</div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">React</div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Front End
            </div>
          </CardFooter>
        </Card>

        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">2023</div>
            <div className="text-base font-bold">
              MySQL Exercises by W3school
            </div>
            <div className="text-sm font-bold">
              <div>Test MySQL skills with W3Schools Exercises.</div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">MySQL</div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Back End
            </div>
          </CardFooter>
        </Card>

        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">2023</div>
            <div className="text-base font-bold">
              HTML Exercises by W3school
            </div>
            <div className="text-sm font-bold">
              <div>Test HTML skills with W3Schools Exercises.</div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">HTML</div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Front End
            </div>
          </CardFooter>
        </Card>

        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">2023</div>
            <div className="text-base font-bold">CSS Exercises by W3school</div>
            <div className="text-sm font-bold">
              <div>Test CSS skills with W3Schools Exercises.</div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">CSS</div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Front End
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default AppCertification;
