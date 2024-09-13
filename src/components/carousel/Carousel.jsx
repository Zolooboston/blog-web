// //
// import { useEffect, useState } from "react";
// import { LeftArrow } from "../svg/LeftArrow";
// import { RightArrow } from "../svg/RightArrow";
// import { DateGenerate } from "../blog-post/DateGenerate";
// import Link from "next/link";

import { Main } from "next/document";
import { useEffect, useState } from "react";

// const Carousel = ({
//   prevSlide,
//   nextSlide,
//   backurl,
//   url,
//   tag,
//   description,
//   time,
// }) => {
//   const toUpperCase = (name) => {
//     const names = name?.split(``);
//     if (names) {
//       return names[0].toUpperCase() + names.slice(1).join(``);
//     }
//   };

//   return (
//     <div className="w-full flex justify-center ">
//       <div className=" container mt-[100px] flex  flex-col gap-[10px] px-8 max-w-7xl ">
//         <Link
//           href={`/blog-list/${backurl}`}
//           className="h-[600px] flex justify-start items-end pl-[5px] pb-[5px] transition-all ease-linear duration-300"
//           style={{
//             backgroundImage: `url(${url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className=" w-[50%] flex flex-col   border-[1px] border-[var(--bordercolor)] rounded-[12px]  bg-[var(--textwhite)] p-[40px]">
//             <div>
//               <button className="px-[10px] py-[4px] rounded-[6px] border-[1px] border-[var(--bordercolor)] text-[14px] leading-[20px] font-[500] text-[var(--textwhite)] bg-[var(--bgblue)]">
//                 {toUpperCase(tag)}
//               </button>
//             </div>
//             <div className="flex flex-col gap-[8px] mt-[16px]">
//               <span className="text-[14px] md:text-[36px] leading-[40px] font-[600]">
//                 {description}
//               </span>
//             </div>
//             <span className="mt-[24px] text-[16px] leading-[24px] font-[400] text-[gray]">
//               <DateGenerate time={time} />
//             </span>
//           </div>
//         </Link>

//         <div className="flex justify-end gap-[8px] ">
//           <button onClick={prevSlide}>
//             <LeftArrow />
//           </button>
//           <button onClick={nextSlide}>
//             <RightArrow />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Carousel;

export const Carousel = () => {
  const [article, setArticle] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&top=5")
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, [article]);
  return (
    <main className="flex flex-col justify-center items-center w-full h-auto py-[32px]">
      <div className="container flex justify-center">
        <div className="flex flex-col justify-end max-w-[1216px] w-full  bg-cover rounded-xl p-[6px]">
          <div
            className="flex flex-col lg:flex-col-reverse lg:justify-start justify-end min-h-[350px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] w-auto rounded-xl bg-cover bg-center  bg-[#14162466] bg-blend-soft-light pl-3 pb-3"
            style={{
              backgroundImage: `url(${article[1]?.cover_image})`,
            }}
          >
            <div className="flex flex-col  max-w-[598px] h-auto bg-white border-[1px] rounded-xl p-10">
              <div className="flex">
                <p className="text-[14px] font-medium text-white  rounded-md py-1 px-[10px] bg-[#4B6BFB]">
                  Technology
                </p>
              </div>

              <p className="text-[16px] font-semibold text-[#181A2A]">
                {article[0]?.title}
              </p>
              <p className="text-[16px] font-normal text-[#97989F]">
                {article[0]?.created_at}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
// export default Carousel;
