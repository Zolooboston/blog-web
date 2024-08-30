// import { TrendingCard } from "./TrendingCard";

import { TrendingCard } from "./TrendingCard";

export default function Trending() {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <div className="w-[184px] trending">Trending</div>
      <TrendingCard />
    </div>
  );
}
