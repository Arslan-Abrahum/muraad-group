import React, { useState } from "react";
import Energy from "../assets/images/5.png";
import Marble from "../assets/images/1.png";
import MurableGroup from "../assets/images/3.png";
import BkLogo from "../assets/images/2.png";
import bk_logo from '../assets/images/bk-logo.png'
import sportsWay from '../assets/images/sports-transparent.png'

const defaultImages = [
  { src: sportsWay, name: "SportsWay" },
  { src: BkLogo, name: "ME & REY" },
  { src: MurableGroup, name: "Murad Group of Companies" },
  { src: Marble, name: "Marble & Stones" },
  { src: Energy, name: "Murad Energy" },
  { src: bk_logo, name: "BK Associates" },
];

export default function Testimonials({ images = defaultImages }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full bg-white py-24 cursor-default">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {["ME&REY Technologies", "BK Associates", "Maliaat Corporate Services", "Sportsway"].map((name, i, arr) => (
              <div key={name}>
                <span className="text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors duration-300">
                  {name}
                </span>
                {i < arr.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                )}
              </div>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            We build quality
          </h1>
          <div className="space-y-2 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 font-light italic">
              One Vision. Many Ventures. Endless Possibilities
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
              Power, Design, and Purpose
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative rounded-xl p-8 transition-all duration-300 hover:bg-white"
            >
              <div className="flex items-center justify-center h-32 mb-4">
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
          <p className="text-xs text-gray-400 tracking-wider uppercase">
            Building the Future
          </p>
        </div>
      </div>
    </section>
  );
}