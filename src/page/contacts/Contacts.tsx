export default function Contacts() {
  return (
    <div>
      <h1 className="font-semibold text-base sm:text-2xl relative text-center top-40 sm:top-20">
        React me!
      </h1>
      <p className="relative top-[150px] sm:top-[70px] text-xs text-center sm:text-sm pt-3">
        Please don’t hesitate to get in touch with me by following{" "}
        <br className="sm:hidden" />
        my social media below:
      </p>
      <div className="grid grid-cols-2 gap-4 w-[200px] m-auto relative top-28">
        <img
          src="./src/assets/mail.png"
          alt=""
          className="w-6 sm:w-8 h-6 sm:h-8"
        />
        <p className=" text-xs self-center sm:text-sm">alwyyourbae@gmail.com</p>
        <img
          src="./src/assets/bxl-github.svg"
          alt=""
          className="w-6 sm:w-8 h-6 sm:h-8"
        />
        <p className=" text-xs self-center sm:text-sm">Alwisteins</p>
        <img
          src="./src/assets/bxl-linkedin.svg"
          alt=""
          className="w-6 sm:w-8 h-6 sm:h-8"
        />
        <p className=" text-xs self-center sm:text-sm">Alwisteins</p>
        <img
          src="./src/assets/instagram.png"
          alt=""
          className="w-6 sm:w-8 h-6 sm:h-8"
        />
        <p className=" text-xs self-center sm:text-sm">@alwywhyuu_</p>
      </div>
    </div>
  );
}
