/* eslint-disable import/extensions */
import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';
import WeatherCard from './components/weatherCard/WeatherCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      {/* <h1>Hello World!</h1> */}
      <div>
        <WeatherCard />
      </div>
    </main>
  );
}
