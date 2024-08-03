"use client";

import { FAQ } from "@/constants";
import { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const Faq = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="faqitem-card">
        <div className="">
          <div className="text-2xl mb-6">Frequently Asked Questions (FAQ)</div>
        </div>
      </div>
      {FAQ.map((item, index) => {
        return (
          <div key={index}>
            <FaqItem question={item.question} answer={item.answer} />
          </div>
        );
      })}
    </div>
  );
};

export default Faq;

/* Faq Item */

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="faqitem-card text-start sm:pr-16">
      <div className="w-auto p-2 flex flex-col">
        <div
          className="w-[80vw] sm:w-[95vw] grid sm:grid-cols-5"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <div className="font-semibold sm:text-xl text-[1rem] pr-5 col-span-4">
            {question}{" "}
          </div>
          {!showAnswer ? (
            <IoIosArrowDropdownCircle className="col-span-1" />
          ) : (
            <IoIosArrowDropupCircle className="col-span-1" />
          )}
        </div>
        <div className={showAnswer ? "text-[0.90rem] mt-3" : "hidden"}>
          {answer}
        </div>
      </div>
    </div>
  );
};
