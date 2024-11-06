import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import newentryLogo from "../assets/NewentryLogo.png";
import JouranalEntryItem from "../components/JouranalEntryItem";
import { Input } from "@/components/ui/input";
import Dropdown from "../components/Dropdown";
import Modal from "./Modal";
import JournalOutput from "./JournalOutput";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const [onViewNote, setOnViewNote] = useState(false);
  const [notes,setNotes] = useState([]);
  const [currentNote,setCurrentNotes] = useState(null);
  const [search,setSearch] = useState("");

  let filteredNotes = [];
  

  // useEffect(() => {
  //    const tempNotes = JSON.parse(localStorage.getItem("notes"));                 /* Get itmes from local storage */
  //    tempNotes && setNotes(tempNotes);
  // },[]);
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    const tempNotes = storedNotes ? JSON.parse(storedNotes) : [];  
    setNotes(tempNotes);
  }, []);
  
  
  const saveNotes = (items) => {
     localStorage.setItem("notes",JSON.stringify(items));                         /* SetItems in local Storage  */
  }

  const handleCreateNote = (note) => {
    if(note){                                                                    /* CreatNote fun*/
      const tempNotes = [...notes,note];
      setNotes(tempNotes);
      saveNotes(tempNotes);
    }
  };
  
  const handleOnUpdate = (note) => {
      setCurrentNotes(note);
      setShowModal(true);
  }
  const handleUpdateNote = (note) => {
    if(note){
      const tempNotes = [...notes.map((n) => (n.id === note.id ? note : n))];      /* UpdateNote fun */
      setNotes(tempNotes);
      setCurrentNotes(null);
      saveNotes(tempNotes);
    }
  };

  const handleDeleteNote = (noteId) => {
     const tempNotes = [...notes.filter(n => n.id !== noteId)];                   /* DeleteNote fun */
     setNotes(tempNotes);
     saveNotes(tempNotes);
  };
 
  const handleOnPreview = (note) => {
    setCurrentNotes(note);
    setOnViewNote(true);
  };
  
  if(search){
    filteredNotes = [
      ...notes.filter(
        (n) => n.title.toLowerCase().includes(search.toLocaleLowerCase()) || 
        n.desc.toLowerCase().includes(search.toLocaleLowerCase())
      ),
    ];
  }else {
    filteredNotes = [...notes];
  }

  console.log(search);
  
  return (
    <>
      <Header modalOpen={() => setShowModal(true)} />

      <div className="min-h-screen flex flex-col items-center py-6 ">
        <div className="w-[940px] h-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-[30px] ">
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="md:w-[210px] w-[360px] h-[60px] flex items-center
               justify-center gap-2 text-[#AF3EFF] border border-[#AF3EFF]
                rounded-[15px] font-semibold hover:bg-purple-100"
            >
              <img
                src={newentryLogo}
                alt="Logo"
                className="h-[40px] w-[40px]"
              />
              New Entry
            </button>
          </div>
          <Input
            className="smd:w-[430px] w-[360px]  h-[60px] border 
            border-[#AF3EFF] rounded-[15px]  text-[#AF3EFF]
            placeholder:text-[#AF3EFF] focus:outline focus:border-[#AF3EFF]"
            placeholder="Search journal entries..."
            onChange={(e) =>setSearch(e.target.value)}
          />
          <Dropdown />
        </div>
        {filteredNotes.map((note) => (
           <JouranalEntryItem key={note?.id} 
                              note={note}    
                              onPreview={handleOnPreview}
                              onUpdate={handleOnUpdate}
                              onDelete={handleDeleteNote}
                               />
        ))}

        { onViewNote && <JournalOutput note={currentNote} setView={setOnViewNote}/>}
      </div>
      <Modal isVisible = {showModal} 
             onClose = {() => setShowModal(false)} 
             createNote = {handleCreateNote}
             updateNote = {handleUpdateNote}
             note = {currentNote}
             />
    </>
  );
};

export default HomePage;
