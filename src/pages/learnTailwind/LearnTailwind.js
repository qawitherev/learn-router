import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export function LearnTailWind() {
  const componentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const scrollToComponent = (index) => {
    if (componentRefs[index].current) {
      window.scrollTo({
        top: componentRefs[index].current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <h1>Using Grid</h1>
      <div className="bg-gray-100">
        <div className="grid auto-rows-[200px] sm:grid-cols-1 md:grid-cols-6 gap-3 p-5">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              ref={componentRefs[i]}
              onClick={() => scrollToComponent(i)}
              className={`rounded-xl bg-white
            ${i === 0 ? "md:col-span-3 md:row-span-1" : ""}
          ${i === 1 ? "md:col-span-1 md:row-span-1" : ""}
          ${[2, 5].includes(i) ? "md:col-span-2 md:row-span-2" : ""}
          ${i === 3 ? "md:col-span-1 md:row-span-2" : ""}
          ${i === 4 ? "md:col-span-3 md:row-span-2" : ""}
          ${i === 6 ? "md:col-span-4 md:row-span-1" : ""}
          transform transition-transform hover:scale-95
          `}
            >
              <SubBento data={i} />
            </div>
          ))}
        </div>
        <div ref={componentRefs[0]}>
          <CompanyWork />
        </div>
        <div ref={componentRefs[1]}>
          <ProjectNumber />
        </div>
        <div ref={componentRefs[2]}>
          <MobileStack />
        </div>
        <div ref={componentRefs[3]}>
          <SocialSite />
        </div>
        <div ref={componentRefs[4]}>
          <CatchPhrase />
        </div>
        <div ref={componentRefs[5]}>
          <WebStack />
        </div>
        <div ref={componentRefs[6]}>
          <OutsideSkill />
        </div>
      </div>
    </>
  );
}

function SubBento(props) {
  const data = props.data;
  switch (data) {
    case 0:
      return (
        <>
          <CompanyWorkSubBento />
        </>
      );
    case 1:
      return (
        <>
          <ProjectNumberSubBento />
        </>
      );
    case 2:
      return (
        <>
          <MobileStackSubBento />
        </>
      );
    case 3:
      return (
        <>
          <SocialSiteSubBento />
        </>
      );
    case 4:
      return (
        <>
          <CatchPhraseSubBento />
        </>
      );
    case 5:
      return (
        <>
          <WebStackSubBento />
        </>
      );
    case 6:
      return (
        <>
          <OutsideSkillSubBento />
        </>
      );
  }
}

function CompanyWorkSubBento() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <h1>This is the company that i worked for</h1>
      </div>
    </>
  );
}

function ProjectNumberSubBento() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <h1>200++</h1>
      </div>
    </>
  );
}

function MobileStackSubBento() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <h1>Mobile stack is: ...</h1>
      </div>
    </>
  );
}

function SocialSiteSubBento() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <h1>Lets get in touch!</h1>
      </div>
    </>
  );
}

function CatchPhraseSubBento() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <h1>THE BEST SOFTWARE ENGINEER</h1>
      </div>
    </>
  );
}

function WebStackSubBento() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <h1>Web stack is...</h1>
      </div>
    </>
  );
}

function OutsideSkillSubBento() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <h1>I am also good with ...</h1>
      </div>
    </>
  );
}

function CompanyWork() {
  const Airdroitech = () => {
    return (
      <>
        <img
          className="w-1/2"
          src="https://airdroitech.com/wp-content/uploads/2021/03/AirdroiTech-Logo-header-400x96.png"
        />
        <h1 className="py-2" >Mar 2023 - Nov 2023</h1>
      </>
    );
  };

  const Fpt = () => {
    return (
      <>
        <img
          className="w-1/2"
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/systems/logo/logo.svg?as=1&iar=0&extension=webp&modified=20230519141554&hash=A28FD0836414E4F10707ECCC57D396B2"
        />
        <h1 className="py-2" >Jan 2024 - Current</h1>
      </>
    );
  };

  return (
    <>
      <div>
        <h1 className="text-adt-green px-7 pb-3 text-3xl font-bold font-sans">
          Companies I proudly serve for
        </h1>
        <div className="grid auto-rows-min-[150px] sm:grid-cols-1 md:grid-cols-2 gap-3 px-5">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-white col-span-1 row-span-1 flex flex-col items-center justify-center h-full p-5"
            >
              {i === 0 ? <Airdroitech /> : <Fpt />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectNumber() {
  return (
    <>
      <h1>Project number is: ...</h1>
    </>
  );
}

function MobileStack() {
  return (
    <>
      <h1>Mobile Stack is: ...</h1>
    </>
  );
}

function SocialSite() {
  return (
    <>
      <h1>Social site is: ...</h1>
    </>
  );
}

function CatchPhrase() {
  return (
    <>
      <h1>Catchphrase is: ...</h1>
    </>
  );
}

function WebStack() {
  return (
    <>
      <h1>Webstack is: ...</h1>
    </>
  );
}

function OutsideSkill() {
  return (
    <>
      <h1>Outside skill is: ...</h1>
    </>
  );
}
