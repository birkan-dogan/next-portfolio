import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "../constants/data";
import styles from "../styles/Home.module.css";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-2xl md:text-4xl  font-bold text-gray-700 dark:text-gray-200 my-2">
              Full-Stack Developer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Team Player
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Open Source Contributor
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 ">
        <div className="w-2/4 ">
          <img
            src={userData.avatarUrl}
            alt="avatar"
            className={styles.shadow}
          />
        </div>
      </div>
    </div>
  );
}
