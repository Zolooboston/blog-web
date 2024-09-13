import { SearchIcon } from "./Icons";
import MenuSvg from "./Icons/MenuSvg";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 border-4 border-solid border-blue-500 py-8">
      <div className="container m-auto z-50 flex justify-between pt-[25px] pb-[32px] items-center fixed px-8 bg-white">
        <img className="w-[158px] h-[36px]" src="Logo.png" alt="Logo" />
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
          className="border-none outline-none bg-[#F4F4F5] rounded-[5px] p-2"
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="flex">
        <button>
          <MenuSvg />
        </button>
      </div>
    </div>
  );
};
export default Header;
