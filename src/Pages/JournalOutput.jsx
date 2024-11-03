import React from "react";
import Header from "../components/Header";

const JournalOutput = ({setView,note}) => {
  return (
    <>
      <div className="min-h-screen flex flex-col 
                     items-center 
                     py-6 fixed inset-0
                   bg-black bg-opacity-25 
                     backdrop-blur-sm z-11">

        <div className="md:w-[740px] w-[340px] h-[450px] flex flex-col items-center relative mb-2 bg-[#FAF4FF] rounded-[15px] py-[25px] md:px-[50px] px-[30px] mt-[80px]">
          <h1 className="font-extrabold text-[40px] text-[#410071] mb-[20px]">{note?.title}</h1>
          <p className="text-sm leading-relaxed md:tracking-widest text-[#410071]">{note?.desc}</p>
          <span className="text-sm text-[#bc2edc] absolute bottom-4 md:left-[50px] left-[30px]  ">{note?.createdAt}</span>
        </div>
        <div className="md:w-[740px] h-[50px] flex justify-end">
           <button onClick={() => setView(false)} className="bg-white w-[340px] md:w-[150px] h-full font-semibold text-[#AF3EFF] border border-[#AF3EFF] rounded-[15px] hover:text-white hover:bg-[#AF3EFF] " >Close</button>
        </div>
      </div>
    </>
  );
};

export default JournalOutput;
