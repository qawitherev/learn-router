import React, { useRef } from "react";

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
      <div className=" bg-gray-200">
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
    default:
      return null;
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
      <div className="flex flex-col items-center justify-center p-3 h-full w-full gap-4">
        <h1>Mobile Development</h1>
        <div className=" flex justify-around w-3/4 gap-1">
          <img
            className=" h-16 rounded-lg"
            alt="kotlin-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png"
          />
          <img
            className=" h-16 w-16 rounded-lg"
            alt="swift-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHbR_02Y1hb45WaOafcClJ7yx2m-yYjxwtdMXDau9qw&s"
          />
          <img
            className=" h-16 w-16 rounded-lg"
            alt="flutter-logo"
            src="https://pbs.twimg.com/profile_images/1187814172307800064/MhnwJbxw_400x400.jpg"
          />
        </div>
        <div className="flex justify-evenly w-3/4 gap-1">
          <img
            className=" h-16 rounded-lg"
            alt="java-logo"
            src="https://www.shareicon.net/data/512x512/2016/09/23/833700_windows_512x512.png"
          />
          <img
            className=" h-16 rounded-lg"
            alt="dart-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png"
          />
        </div>
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
      <div className="flex flex-col items-center justify-center h-full gap-4 p-5">
        <h1>Web stack is...</h1>
        <div className=" flex justify-center w-3/4 gap-1">
          <img
            className=" h-16 rounded-lg"
            alt="react-logo"
            src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
          />
          <div className=" px-5" />
          <img
            className=" h-16 rounded-lg"
            alt="tailwind-logo"
            src="https://play.tailwindcss.com/social-square.jpg"
          />
        </div>
        <div className="flex justify-center w-3/4 gap-1">
          <img
            className=" h-16 rounded-lg"
            alt="nodejs-logo"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
          />
          <div className=" px-5" />
          <img
            className=" h-16 rounded-lg"
            alt="js-logo"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          />
        </div>
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
          alt="adt-logo"
        />
        <h1 className="py-2">Mar 2023 - Nov 2023</h1>
      </>
    );
  };

  const Fpt = () => {
    return (
      <>
        <img
          className="w-1/2"
          src="https://fptsoftware.com/-/media/project/fpt-software/fso/systems/logo/logo.svg?as=1&iar=0&extension=webp&modified=20230519141554&hash=A28FD0836414E4F10707ECCC57D396B2"
          alt="fpt-logo"
        />
        <h1 className="py-2">Jan 2024 - Current</h1>
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
  const stackName = (index) => {
    switch (index) {
      case 0:
        return "Kotlin";
      case 1:
        return "Swift";
      case 2:
        return "Flutter";
      case 3:
        return "Java";
      case 4:
        return "Dart";
      default:
        return "";
    }
  };

  const stackInfo = (index) => {
    switch (index) {
      case 0:
        return {
          name: 'Kotlin',
          description: 'Kotlin is a statically-typed programming language that runs on the Java Virtual Machine (JVM) and can also be compiled to JavaScript or native code. Developed by JetBrains, Kotlin aims to be concise, expressive, and interoperable with existing Java code.',
          alt: "kotlin-logo",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
        };
        case 1:
        return {
          name: 'Swift',
          description: 'Swift is a programming language developed by Apple for iOS, macOS, watchOS, tvOS, and other Apple platforms. It was introduced in 2014 as a replacement for Objective-C and is designed to be modern, safe, and developer-friendly.',
          alt: "swift-logo",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHbR_02Y1hb45WaOafcClJ7yx2m-yYjxwtdMXDau9qw&s",
        };
        case 2:
        return {
          name: 'Flutter',
          description: 'Flutter is an open-source UI software development toolkit created by Google. It is used to build natively compiled applications for mobile, web, and desktop from a single codebase.',
          alt: "flutter-logo",
          src: "https://pbs.twimg.com/profile_images/1187814172307800064/MhnwJbxw_400x400.jpg",
        };
        case 3:
        return {
          name: 'Java',
          description: 'Java is a versatile, object-oriented, and platform-independent programming language originally developed by Sun Microsystems and now owned by Oracle Corporation. ',
          alt: "java-logo",
          src: "https://www.shareicon.net/data/512x512/2016/09/23/833700_windows_512x512.png",
        };
        case 4:
        return {
          name: 'Dart',
          description: 'Dart is a programming language developed by Google. It is known for its simplicity, speed, and versatility. Dart is often associated with the Flutter framework, where it serves as the primary language for building user interfaces across various platforms. ',
          alt: "dart-logo",
          src: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png",
        };
      default:
        return {
          name: 'Kotlin',
          description: 'Swift is a programming language developed by Apple for iOS, macOS, watchOS, tvOS, and other Apple platforms. It was introduced in 2014 as a replacement for Objective-C and is designed to be modern, safe, and developer-friendly.',
          alt: "kotlin-logo",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
        };
    }
  };

  return (
    <>
      <div className="flex flex-col justify-start px-5">
        <h1>Mobile Stack is: ...</h1>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className=" flex flex-col bg-white rounded-lg p-5">
              <h1>{stackInfo(i).name}</h1>
              <div className="py-1" />
              <div className=" flex justify-center">
                <img
                  className=" rounded-lg h-10 w-10"
                  alt={stackInfo(i).alt}
                  src={stackInfo(i).src}
                />
                <div className=" px-2" />
                <h1 className=" flex-grow">{stackInfo(i).description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
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