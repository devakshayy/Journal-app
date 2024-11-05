import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {v4 as getID} from "uuid";

const Modal = ({isVisible,onClose,note,createNote,updateNote}) => {
  
  const [title,setTitle] = useState(note? note?.title :"");    
  const [desc,setDesc] = useState(note? note?.desc :"");

  const clearInputs = () =>{
    setTitle("");
    setDesc("");
  }
 
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    if(note){
      //updateNote
      updateNote({
        ...note,
        title,
        desc,
      });
    }else{
      //createNote
      createNote({
        id:getID(),
        title,
        desc,
        createdAt : new Date().toLocaleString(),
      })
    }
    clearInputs();
    onClose()
  };


  console.log(title,desc);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 
                backdrop-blur-sm
                flex justify-center items-center z-10"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="min-h-screen flex flex-col items-center pt-20">
        <div className="md:w-[940px] w-[360px] md:h-[590px] h-[520px] flex flex-col items-center mb-6 bg-[#FAF4FF] rounded-[15px]">
          <div className="w-full md:h-[80px] h-[60px] border-b border-[#AF3EFF] mb-[15px] md:mb-[30px] flex items-center justify-between px-[30px]">
            <h1 className="text-[28px] font-bold text-[#410071]">{note? "Update Note":"Add Note"}</h1>
            <button>
              <img className="curser-pointer"
                width="30"
                height="30s"                                                       /* CLOSE BUTTON */
                src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png"
                alt="delete-sign--v1"
                onClick={() =>onClose()}
              />
            </button>
          </div>
          <form onSubmit={handleSubmit} >
            <Input
              className="md:w-[880px] w-[340px] h-[50px] border 
            border-[#AF3EFF] rounded-[15px] md:mb-[30px] mb-[15px] 
            text-[#AF3EFF] placeholder:text-[#AF3EFF]"
              placeholder="Title..."
              required                                                                  /* INPUT */
              type="text"
              text="uppercase"
              maxLength={30}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              className="h-[300px] md:w-[880px] w-[340px] rounded-[15px]
             border border-[#AF3EFF] text-sm text-[#AF3EFF] 
             placeholder:text-sm placeholder:text-[#AF3EFF]"
              placeholder="Enter your text........"                                     /* TEXT AREA */
              spellCheck="false"
              maxLength={150}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <div className="md:w-[880px] w-[340px] h-[50px] flex justify-end">            
              <button
                className="bg-white w-[140px] h-full font-semibold text-[#AF3EFF]
                           border border-[#AF3EFF] rounded-[15px] hover:text-white  
                         hover:bg-[#AF3EFF] md:mt-[30px] mt-[10px]"
                type="submit"                                                              /* SAVE BUTTON */
              >
                Save Entry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
