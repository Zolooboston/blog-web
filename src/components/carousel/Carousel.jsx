export default function Carousel() {
  return (
    <div
      className="flex flex-col justify-end h-screen"
      style={{
        backgroundImage: "url(/mainpic.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "500px",
      }}
    >
      <div className="w-[598px] h-[40px] gap-6 bg-[#FFF]">
        <div>Technology</div>
        <div>
          <h1>Grid system for better Design User Interface</h1>
        </div>
        <div>
          <h1>August 20, 2022</h1>
        </div>
      </div>
    </div>
  );
}
