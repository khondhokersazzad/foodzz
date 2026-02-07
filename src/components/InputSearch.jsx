"use client";
import React from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const searchText = e.target.searchtext.value;
    //Adding search funtionality in search box in 3 steps
    //1.creating new params
    const newParams = new URLSearchParams(params.toString());
    //2.adding params value
    newParams.set('search',searchText);
    //3.pushing to the new url
    router.push(`?${newParams.toString()}`)

  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="flex"> 
        <input
          type="text"
          name='searchtext'
          placeholder="Search food..."
          className="
          w-full
          bg-zinc-900
          text-white
          text-sm
          placeholder:text-gray-400
          border
          border-red-700
          
          py-2.5
          pl-10
          pr-3
          focus:outline-none
          focus:border-red-600
          focus:ring-1
          focus:ring-red-600
          transition
        "
        />
        <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
         {/* Search Button */}
      <button
        className="
          bg-red-600
          hover:bg-red-700
          transition
          text-white
          px-3
          py-2.5
          
          flex
          items-center
          gap-1
          text-sm
          font-medium
        "
      >
        
        Search
        <Search size={16} />
      </button>
      </form>
    </div>
  );
};

export default InputSearch;
