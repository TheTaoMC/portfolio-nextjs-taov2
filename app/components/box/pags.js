//"use client";
import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

function AppBox({ datas }) {
    return (
        <section>
            <div className="m-10 flex justify-center">
                <div className="text-5xl">{datas.title}</div>
            </div>

            <div className="w-[90%] m-auto flex justify-center gap-2">
                {datas.data.map((e, i) =>
                    <Card key={i} className=" w-96">
                        <CardBody>
                            <div className="text-2xl font-bold">{e.year}</div>
                            <div className="text-base font-bold">
                                {e.text1}
                            </div>
                            <div className="text-sm font-bold">
                                <div>{e.text2}</div>
                                <div>{e.text3}</div>
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0 flex flex-wrap">
                            <div className="bg-black text-white rounded-lg p-2 m-2">RTC</div>
                            <div className="bg-black text-white rounded-lg p-2 m-2">BusCom</div>
                        </CardFooter>
                    </Card>
                )}
            </div>



        </section>
    )
}

export default AppBox