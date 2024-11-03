import React, { useState } from "react";
import Header from "../components/Header";
import newentryLogo from "../assets/NewentryLogo.png";
import JouranalEntryItem from "../components/JouranalEntryItem";
import { Input } from "@/components/ui/input";
import Dropdown from "../components/Dropdown";
import Modal from "./Modal";
import JournalEntry from "./JournalEntry";
import JournalOutput from "./JournalOutput";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [onCreateNote, setOnCreateNote] = useState(false);
  const [onViewNote, setOnViewNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const handleCreateNote = (note) => {
    if (note) {
      const tempNotes = [...notes, note];
      setNotes(tempNotes);
    }
  };

  const handleOnUpdate = (note) => {
    setCurrentNote(note);
    setOnCreateNote(true);
  } 

  const handleUpdateNote = (note) => {
    if (note) {
      const tempNotes = [...notes.map((n) => (n.id === note.id ? note : n))];
      setNotes(tempNotes);

    }
  };

  const handleDeleteNote = (noteId) => {
    const tempNotes = [...notes.filter((n) => n.id !== noteId)];
    setNotes(tempNotes);
  };

  const handleOnPreview = (note) => {
      setCurrentNote(note);
      setOnViewNote(true);
  }

  console.log(notes);

  return (
    <>
      <Header setOpen={setOnCreateNote} />

      <div className="min-h-screen flex flex-col items-center py-6 ">
        <div className="w-[940px] h-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-[30px] ">
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="md:w-[210px] w-[360px] h-[60px] flex items-center justify-center gap-2 text-[#AF3EFF] border border-[#AF3EFF] rounded-[15px] font-semibold hover:bg-purple-100"
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
            className="smd:w-[430px] w-[360px]  h-[60px] border border-[#AF3EFF] rounded-[15px]  text-[#AF3EFF] placeholder:text-[#AF3EFF] focus:outline focus:border-[#AF3EFF]"
            placeholder="Search journal entries..."
          />
          <Dropdown />
        </div>
        {notes.map((note) => (
          <JouranalEntryItem
            key={note?.id}
            note={note}
            onPreview={handleOnPreview}
            onUpdate={handleOnUpdate}
            onDelete={handleDeleteNote}
          />
        ))}

        {onViewNote && <JournalOutput note={currentNote} setView={setOnViewNote} />}
        {onCreateNote && <Modal  setOpen={setOnCreateNote} />}

      </div>
      <Modal
        note={currentNote}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        createNote={handleCreateNote}
        updateNote={handleUpdateNote}
        setOpen={setOnCreateNote}
      />
    </>
  );
};

export default HomePage;
