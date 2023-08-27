export default function Home() {
  return (
    <div>
      <img
        src="./src/assets/profile-rounded.jpg"
        alt=""
        className="relative sm:left-60 m-auto w-40 sm:w-[240px] h-40 sm:h-[240px] top-40 sm:top-32 border-solid border-4 rounded-full"
      />
      <div className="relative top-48 sm:top-[170px] sm:absolute ml-[15%] sm:ml-[23%]">
        <h3 className="text-sm sm:text-lg font-semibold">
          Hi everyone<span className="animate-wave inline-block p-1">👋</span>, im Alwi Wahyu
          Waludin
        </h3>
        <h1 className="text-2xl sm:text-4xl sm:my-4 animate-typing overflow-hidden whitespace-nowrap border-r-2 pr-5 border-r-white text-prim-blue font-bold my-1.5">
          Junior fullstack web
          <br /> developer
        </h1>
        <p className="text-xs sm:text-sm">
          a self-taught learner who passionate in web
          <br /> developer, especially using MongoDB, ExpressJS,
          <br /> ReactJS, NodeJS teck stack
        </p>
        <div className="mt-3 flex items-center">
          <div className="h-6 w-24 sm:h-8 sm:w-32 bg-prim-blue flex justify-center items-center inline-block rounded sm:rounded-md">
            <img
              src="./src/assets/downloadFile.png"
              alt=""
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1"
            />
            <a
              href=""
              className="text-prim-white font-semibold sm:text-[11px] text-[8px] mt-0.5 tracking-wide"
            >
              Download CV
            </a>
          </div>
          <a href="https://github.com/Alwisteins">
            <img
              src="./src/assets/github-mark.svg"
              alt=""
              className="w-5 h-5 sm:w-7 sm:h-7 m-2"
            />
          </a>
          <a href="https://www.linkedin.com/in/alwi-wahyu-8bb256288/">
            <img
              src="./src/assets/bxl-linkedin.svg"
              alt=""
              className="w-5 h-5 sm:w-7 sm:h-7"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
