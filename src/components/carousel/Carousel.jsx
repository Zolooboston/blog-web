export default function Carousel() {
  return (
    <div className="w-full">
      <div
        className='flex flex-col justify-end  h-[800px] bg-[url("https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOv1Sv0nZsc-7aG08OA0bM-c5I4UQcBj76wy1pKi0Bn21U-UsfiuD35-r5tZrTah4Ew8JEif8pV3i-KtHOZ~U-ag587jL4qM3y4YdvO8UP79kNEUuCRBTzzYDXUrmdXciuWsb9eTaGK0GJdHYeVaJWCl30rPRSUBvfXryRc~SSsND9Rx0DMciKWix0uBEAch94qBJ~-Y8RWL4O9UR1m~-tOCN-t4s4KHTc93XQx74nWmDCsOBsw6AqET2SBfeK~VMQmI~Q9~uzxHfTslPeK8iXLhnrBsZXX~13kXV-F9stsonWepo7UBThJCg6UJJifReHGW8PM5khO6WQ-y3siAww__")] bg-cover rounded-xl'
        // style={{
        //   backgroundImage: "url(/mainpic.png)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   width: "100%",
        //   height: "600px",
        // }}
      >
        <div className="flex flex-col w-[48%] h-[252px] p-10 gap-6 bg-[#FFF] rounded-xl mx-[11px] my-[13px]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center px-[10px] py-1 w-[77px] h-[20px] rounded-md bg-[#4B6BFB] technology ">
              Technology
            </div>
            <div className="w-[518px] h-[80px]">
              <h1 className="carousel-text">
                <div>Grid system for better </div>
                <div>Design User Interface</div>
              </h1>
            </div>
          </div>
          <div>
            <h1 className="date">August 20, 2022</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-end m-2 gap-2 w-[40px]h-[40px]">
        <button>
          <img src="back.png" alt="" />
        </button>
        <button>
          <img src="forward.png" alt="" />
        </button>
      </div>
    </div>
  );
}
