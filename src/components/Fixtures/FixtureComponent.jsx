import React from "react";
import FixturesList from "./FixturesList.jsx";
import { FaBrain, FaLaptopCode, FaRobot } from "react-icons/fa";
import FloatingElement from "./FloatingElement.jsx";

function FixtureComponent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute -z-50 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black pointer-events-none"></div>
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-8 relative z-10 ">
        <FloatingElement className="text-center w-full">
          <h1 className="mt-10 text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Upcoming Tech Events
          </h1>
        </FloatingElement>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FloatingElement givenDuration={0.5}>
            <div className="bg-gradient-to-br from-purple-900 to-black rounded-lg p-6 text-center backdrop-filter backdrop-blur-lg">
              <FaRobot className="text-4xl mb-4 mx-auto text-purple-400" />
              <h2 className="text-xl font-semibold mb-2">RoboSoccer</h2>
              <p className="text-sm">
                Witness robots compete in an exciting soccer match!
              </p>
            </div>
          </FloatingElement>
          <FloatingElement givenDuration={0.6}>
            <div className="bg-gradient-to-br from-pink-900 to-black rounded-lg p-6 text-center backdrop-filter backdrop-blur-lg">
              <FaBrain className="text-4xl mb-4 mx-auto text-pink-400" />
              <h2 className="text-xl font-semibold mb-2">Mesmerize</h2>
              <p className="text-sm">
                Explore the fascinating world of AI and machine learning
              </p>
            </div>
          </FloatingElement>
          <FloatingElement givenDuration={0.8}>
            <div className="bg-gradient-to-br from-red-900 to-black rounded-lg p-6 text-center backdrop-filter backdrop-blur-lg">
              <FaLaptopCode className="text-4xl mb-4 mx-auto text-red-400" />
              <h2 className="text-xl font-semibold mb-2">Coding Competition</h2>
              <p className="text-sm">
                Test your coding skills against the best programmers
              </p>
            </div>
          </FloatingElement>
        </div>
        <FixturesList />
      </main>
    </div>
  );
}

export default FixtureComponent;
