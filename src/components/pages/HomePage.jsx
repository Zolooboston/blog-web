import Carousel from "../carousel/Carousel";
import Header from "../header/Header";
import Trending from "../trending/Trending";

export default function HomePage() {
  return (
    <div className="container border-4 border-solid border-black-400 flex flex-col items-center gap-y-[100px] ">
      <Header />
      <Carousel />
      <Trending />
    </div>
  );
}
