import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import AtomBubbles from "./AtomBubbles";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-between items-center overflow-hidden max-w-7xl mx-auto px-4 py-10 md:py-10">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-700 dark:text-gray-200 my-2">
              Full-Stack Developer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-700 dark:text-gray-200 my-2">
              Team Player
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-700 dark:text-gray-200 my-2">
              Open Source Contributor
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className="hidden lg:flex w-full md:w-1/2 justify-end">
        <AtomBubbles />
      </div>
    </div>
  );
}
