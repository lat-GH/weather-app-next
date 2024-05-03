import Image from "next/image";
import React from 'react';
import { Inter } from "next/font/google";
import Weather_card from "./components/Weather_card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <h1>Hello World!</h1> */}
      <Weather_card 
      curr_location = "London"
      today_tempurature = {100}
      warmer_or_colder = "Its a little colder than yesterday"
      />
    </main>
  );
}
