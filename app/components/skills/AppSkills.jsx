"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function AppSkills() {
  return (
    <section>
      <div className="m-10 flex justify-center">
        <div className="text-5xl">Skills</div>
      </div>

      <div className="w-[90%] m-auto flex justify-center gap-2">
        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">Front-end</div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">
              ReactJS
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">NextJS</div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Tailwind
            </div>
          </CardFooter>
        </Card>

        <Card className=" w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              <div className="text-2xl font-bold">Back-end</div>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Express - Node.js
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              MySQL
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default AppSkills;
