import MyForm from "../../component/form/Form";

export default function Contacts() {
  const contacts: {
    image: string;
    anchor: string;
    name: string;
  }[] = [
    { image: "/mail.png", anchor: "", name: "alwyyourbae@gmail.com" },
    {
      image: "/bxl-github.svg",
      anchor: "https://github.com/Alwisteins",
      name: "Alwisteins",
    },
    {
      image: "/bxl-linkedin.svg",
      anchor: "https://www.linkedin.com/in/alwi-wahyu-8bb256288/",
      name: "Alwisteins",
    },
    {
      image: "/instagram.png",
      anchor:
        "https://instagram.com/alwywhyuu_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
      name: "alwywhyuu_",
    },
  ];
  return (
    <div className="z-[-100]">
      <h1 className="font-semibold text-base sm:text-2xl relative text-center sm:top-20">
        React me!
      </h1>
      <p className="relative z-[-10] sm:top-[80px] text-xs text-center sm:text-base pt-3">
        Please don’t hesitate to get in touch with me by following
        <br className="sm:hidden" />
        my social media below:
      </p>
      <div className="grid grid-cols-2 gap-4 w-[100px] ml-24 sm:mx-auto relative top-8 sm:top-28">
        {contacts.map((item) => (
          <>
            <img src={item.image} alt="" className="w-6 sm:w-8 h-6 sm:h-8" />
            <a
              className="underline text-xs self-center sm:text-base"
              href={item.anchor}
            >
              {item.name}
            </a>
          </>
        ))}
      </div>
      <MyForm />
    </div>
  );
}
