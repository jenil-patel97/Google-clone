import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Mic from "../assets/google-voice.png";
import Lens from "../assets/Google-Lens.png";
import { useStateValue } from "../store/StateProvider";
import { actionTypes } from "../components/Reducer";
import { useNavigate } from "react-router-dom";

const Search = ({ hideBtn }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };
  return (
    <div>
      <div className="flex items-center rounded-full border border-zinc-400 h-12 px-[15px] py-[10px] w-[560px] mt-[20px] m-auto">
        <AiOutlineSearch color="gray" size={22} />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-[13px] py-[8px] font-medium border-none outline-none"
        />
        <img src={Mic} alt="mic" />
        <img src={Lens} alt="lens" width={20} className="ml-5" />
      </div>

      {!hideBtn ? (
        <div className="flex justify-center mt-[32px] space-x-6">
          <button
            onClick={search}
            className="space-x-8 px-4 py-2 rounded-md bg-[#f5f1f1] border border-white hover:border-slate-300"
            type={"submit"}
          >
            Google Search
          </button>
          <button className="space-x-8 px-4 py-2 rounded-md bg-[#f5f1f1] border border-white hover:border-slate-300">
            I'm feeling lucky
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-[32px] space-x-6">
          <button
            onClick={search}
            className="hidden space-x-8 px-4 py-2 rounded-md bg-[#f5f1f1] border border-white hover:border-slate-300"
            type={"submit"}
          >
            Google Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
