import Form from "../../components/Form";

export default function Contacts() {
  return (
    <div id="contacts" className="px-10 py-16 sm:px-60">
      <h1 className="text-center font-bold text-3xl sm:text-5xl">React me!</h1>
      <p className="sm:text-lg text-center py-3">
        If you want to know more about me, feel free to email me:
      </p>
      <Form />
    </div>
  );
}
