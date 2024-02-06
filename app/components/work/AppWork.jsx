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

        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300 absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/411386035_6951728971572807_6201009611021106116_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHPVnI7C4skrZy4V5EO2IKMsKY-D5wKDh-wpj4PnAoOH4NuNX15ON-LY7jdwuaLDe-Y3wfbdkAIR-JC5WJaFa-Q&_nc_ohc=y9USy_G9mM8AX8NfZIU&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfA8KudqW_5JC90m-HDH5AG4vmg8zmy6vhHfbFnOX0RaaA&oe=65C0D73D')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <div className="text-white py-10">ถ่ายงานรถ</div>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.18169-9/12141699_421338178073180_1742933852055111976_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeGdBLiyDIrR85ZfJCNcvK7KzopEjklVgkHOikSOSVWCQVAsg2MDNwHM-uM3KboZ4N-yph3IJ2cOjtRoCdfWOEDh&_nc_ohc=VeHf0MhqSqYAX8HWY9r&_nc_ht=scontent.fbkk29-6.fna&oh=00_AfDn5NvugTkVB7c9OFj6eV8iTVlvxSq7NmfZFryjh_5f-g&oe=65E3141C"
            />
          </CardBody>
        </Card>

        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300 absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/393119327_6712325995513107_95135009005533664_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeE2WLCLrkP8uqk8b7XGxbNYz2HkmmXrhFPPYeSaZeuEU9Fln0Gp-x1EmA-4ZbszR0nAxXVDc4yDE0C7nqY2nKOg&_nc_ohc=c0IsMdeA5jQAX-zIAE9&_nc_ht=scontent.fbkk29-6.fna&oh=00_AfB3El0Qx8-L00SpY0ZYOHEzsQf1p45yjNskhB49rTTDvg&oe=65C0AB63')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <div className="text-white py-10">ถ่ายนางแบบ</div>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.18169-9/11891272_1020946044622211_5847168257008134137_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeEcMHnnYl4tiuuoyI3jwiwCdbdL4nofzfl1t0vieh_N-TF3jcATGmvjRpsV1EE8SEkxHPC6i_xP4g5O84lhVIJ5&_nc_ohc=JMcu_cs0aoUAX_ZkKqN&_nc_ht=scontent.fbkk29-6.fna&oh=00_AfCU2DGhAVnXXWYssAv-_y0QxU53ypcaRb9pvUmtk3D1mg&oe=65E32DA9"
            />
          </CardBody>
        </Card>

        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300 absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/378136099_6596446843767690_3311856008366843668_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGTM0q13SpipEE5FtEs5rGYqT9Y-80vDwWpP1j7zS8PBU_kle78kJPOjtCy1MQK-uyoYTfPHWK3afKJD_Crdx5b&_nc_ohc=S-h9QevJkfUAX-A6MuJ&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfBZATyKR3Th2R0L4HvVHxonhwkYvukUW36s978W48Mzuw&oe=65BFFA06')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <div className="text-white py-10">สายธรรมชาติ</div>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.18169-9/10653761_824437677606383_3800809582068410409_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeFKnnrcJtI1FlA5ehP8Su2kYDdwSxl6an1gN3BLGXpqfSYNtRyYL15FsGjHxQilihMH_qIMk5U_Wx6cS0Etw-6X&_nc_ohc=KMSeD_APO7oAX843pHs&_nc_ht=scontent.fbkk29-5.fna&oh=00_AfBvO3BbaJsFDPtN6lKJAz0U953wzTaKGT18l9ftuNb1vw&oe=65E3144D"
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default AppWork;
