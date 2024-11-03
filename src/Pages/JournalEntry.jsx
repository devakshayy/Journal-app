import { Input } from '../components/ui/input'
import {Textarea} from '../components/ui/textarea'
import React from 'react'

const JournalEntry = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20">
    <div className="md:w-[940px] w-[360px] md:h-[590px] h-[520px] flex flex-col items-center mb-6 bg-[#FAF4FF] rounded-[15px]">
      <div className="w-full md:h-[80px] h-[60px] border-b border-[#AF3EFF] mb-[15px] md:mb-[30px] flex items-center justify-between px-[30px]">
        <h1 className="text-[28px] font-bold text-[#410071]">Add Note</h1>
        <button >
          <img
            width="30"
            height="30s"
            src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png"
            alt="delete-sign--v1"
          />
        </button>
      </div>
      <Input
        className="md:w-[880px] w-[340px] h-[50px] border border-[#AF3EFF] rounded-[15px] md:mb-[30px] mb-[15px]   text-[#AF3EFF] placeholder:text-[#AF3EFF] "
        placeholder="Heading..."
      />
      <Textarea
        className="h-[300px] md:w-[880px] w-[340px] rounded-[15px] border border-[#AF3EFF] text-sm text-[#AF3EFF] placeholder:text-sm placeholder:text-[#AF3EFF]"
        placeholder="Enter your text........"
        spellCheck="false"
        maxLength={150}
      />
      <div className="md:w-[880px] w-[340px] h-[50px] flex justify-end">
        <button
          className="bg-white w-[140px] h-full font-semibold text-[#AF3EFF]
                           border border-[#AF3EFF] rounded-[15px] hover:text-white
                         hover:bg-[#AF3EFF] md:mt-[30px] mt-[10px]"
        >
          Save Entry
        </button>
      </div>
    </div>
  </div>
  )
}

export default JournalEntry
