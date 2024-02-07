"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function AppExperience() {
  return (
    <section>
      <div className="m-10 flex justify-center">
        <div className="text-5xl">Experiences</div>
      </div>

      <div className="w-[90%] m-auto flex justify-center gap-2 flex-wrap">
        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">2016</div>
            <div className="text-base font-bold">
              <a href="https://webv3.theo.co.th/th/contact-us-th/">
                THEO Engineering Co, Ltd.
              </a>
            </div>
            <div className="text-sm font-bold">
              <div>ตำแหน่ง : Service</div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Technology
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Weighing
            </div>
          </CardFooter>
        </Card>

        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">2016</div>
            <div className="text-base font-bold">
              <a href="https://webv3.theo.co.th/th/contact-us-th/">
                THEO Engineering Co, Ltd.
              </a>
            </div>
            <div className="text-sm font-bold">
              <div>ตำแหน่ง : Software Tester</div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Technology
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Weighing
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">Tester</div>
          </CardFooter>
        </Card>

        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">2016</div>
            <div className="text-base font-bold">
              <a href="https://webv3.theo.co.th/th/contact-us-th/">
                THEO Engineering Co, Ltd.
              </a>
            </div>
            <div className="text-sm font-bold">
              <div>ตำแหน่ง : Design UI</div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Technology
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Weighing
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">Tester</div>
            <div className="bg-black text-white rounded-lg p-2 m-2">UI</div>
          </CardFooter>
        </Card>

        <Card className=" w-96">
          <CardBody>
            <div className="text-2xl font-bold">2016</div>
            <div className="text-base font-bold">
              <a href="https://webv3.theo.co.th/th/contact-us-th/">
                THEO Engineering Co, Ltd.
              </a>
            </div>
            <div className="text-sm font-bold">
              <div>ตำแหน่ง : Project Coordinators</div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex flex-wrap">
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Technology
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Weighing
            </div>
            <div className="bg-black text-white rounded-lg p-2 m-2">Tester</div>
            <div className="bg-black text-white rounded-lg p-2 m-2">UI</div>
            <div className="bg-black text-white rounded-lg p-2 m-2">
              Project Co
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default AppExperience;
