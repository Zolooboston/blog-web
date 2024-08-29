import { SearchIcon } from "./Icons";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-8 border-4 border-solid border-blue-500 py-8">
      <div>
        <img className="w-[158px] h-[36px]" src="Logo.png" alt="" />
      </div>
      <div className="flex justify-center items-center gap-10">
        <button>Home</button>
        <button>Blog</button>
        <button>Contact</button>
      </div>
      <div className="flex items-center gap-3 ">
        <input
          type="text"
          placeholder="Search..."
          className="w-[114px] h-[20px]"
        />
        <SearchIcon />
      </div>
    </div>
  );
}
