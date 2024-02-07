"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function AppWork() {
  return (
    <section className="features">
      <div className="m-10 flex justify-center">
        <div className="text-5xl">Work</div>
      </div>

      <div className="w-[90%] m-auto grid lg:grid-cols-2 xl:grid-cols-4 xs:text-xl  md:text-2xl gap-10 place-items-center">
        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className=" hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300 absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/424578996_7109101119168924_7813117194782022464_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeE5_TLkDxwT963HqrXdr9qz1CsKSWPK2UHUKwpJY8rZQflwVEWBAl-GZtjpS0m5bO1y5uYBWdMt2U2PVD7Y_1RF&_nc_ohc=mkUxfOBm2fkAX8x2ztR&_nc_oc=AQmt0T26boU6UseoPVZ4_RTecZlG4-OOGox6OiEyDP_rJKdMYZ3FiiIQP0v38h4Kq-8&_nc_ht=scontent.fbkk29-6.fna&oh=00_AfB1Pt7EAdp8h2zo-VPC2Q8yuaZ1iy6NkmSsQuMqZDxyPw&oe=65C1718F')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <div className="text-white py-10">งานถ่ายรูปคู่</div>

            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.18169-9/11986983_1024284090955073_7161479664386364246_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeEHtiylZAKiqL_48gw69UbbjzsS5DMn4QaPOxLkMyfhBqzhvMhPvkrps8iBMXbLAxoQvqzKZz95-ISGb7UDhA28&_nc_ohc=Y1eQVGUL16UAX_6HH98&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfAdtfngX6tQt8UjAJwdWp2se6v52tKTeMiRzYLejX8mOw&oe=65E3101B"
            />
          </CardBody>
        </Card>
      </div>
      
    </section>
  );
}

export default AppWork;
