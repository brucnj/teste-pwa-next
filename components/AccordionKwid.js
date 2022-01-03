import { useState } from "react";

export default function AccordionLanding(props) {
  const [isShowing, setIsShowing] = useState(false);
  const [isOpened, setIsOpen] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
    setIsOpen(!isOpened);
  };

  return (
    <div className="relative overflow-hidden border-b border-yellow-400 select-none" onClick={toggle}>
      <h4 className="flex items-center justify-between px-2 text-lg font-medium text-gray-700 cursor-pointer sm:text-xl md:text-2xl py-7 hover:text-gray-900" >
        <span>{props.title}</span>
        { !isOpened ?
            <svg className="w-6 h-6 mr-2 transition-all duration-200 ease-out transform rotate-180" fill="none" stroke="#374151" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            :
            <svg className="w-6 h-6 mr-2 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="#374151" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        }
      </h4>
      <p className="px-8 pt-0 -mt-2 text-gray-500 transition-all duration-200 sm:text-lg py-7 " style={{ display: isShowing ? "block" : "none", padding: "5px" }}>
          <img src={props.img} />
          <h6 className="pt-3 text-2xl font-extrabold">{props.subtitle}</h6>
          <span className="pt-4 text-sm my-1">{props.content}</span>
          <button className="my-5 block py-3 px-10 mx-auto bg-black text-white">Consultar condições</button>
      </p>
    </div>
  );
}