"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import AppBox from "../box/pags";
import { data } from "autoprefixer";

function AppEducation() {

  //"title" : 'Educations', year : '2012-2014',text1 : 'Educations',text2 : 'Educations',text3 : 'Educations'

  const datas = {
    title: 'Educations000',
    data: [
      {
        year: '2012-2014', text1: 'High Voc. Cert. (Ratchaburi Technical College)
        ', text2: 'Faculty of Business Administration', text3: 'Business Computer'
      },
      {
        year: '2014-2016', text1: 'B.BA. (Southeast Asia University)
        ', text2: 'Faculty of Business Administration
        ', text3: 'Business Computer'
      }
    ]
  }

  console.log(data);
  return (
    /*     <section>
          <div className="m-10 flex justify-center">
            <div className="text-5xl">Educations</div>
          </div>
    
          <div className="w-[90%] m-auto flex justify-center gap-2">
            <Card className=" w-96">
              <CardBody>
                <div className="text-2xl font-bold">2012 - 2014</div>
                <div className="text-base font-bold">
                  High Voc. Cert. (Ratchaburi Technical College)
                </div>
                <div className="text-sm font-bold">
                  <div>Faculty of Business Administration</div>
                  <div>Business Computer</div>
                </div>
              </CardBody>
              <CardFooter className="pt-0 flex flex-wrap">
                <div className="bg-black text-white rounded-lg p-2 m-2">RTC</div>
                <div className="bg-black text-white rounded-lg p-2 m-2">BusCom</div>
              </CardFooter>
            </Card>
    
            <Card className=" w-96">
              <CardBody>
                <div className="text-2xl font-bold">2014 - 2016</div>
                <div className="text-base font-bold">
                  B.BA. (Southeast Asia University)
                </div>
                <div className="text-sm font-bold">
                  <div>Faculty of Business Administration</div>
                  <div>Business Computer</div>
                </div>
              </CardBody>
              <CardFooter className="pt-0 flex flex-wrap">
                <div className="bg-black text-white rounded-lg p-2 m-2">SAU</div>
                <div className="bg-black text-white rounded-lg p-2 m-2">BusCom</div>
              </CardFooter>
            </Card>
          </div>
        </section> */

    <AppBox datas={datas} />
  );
}

export default AppEducation;
