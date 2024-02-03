import { useState } from "react";
import FormComponent from "../components/Form";

export default function BookNowPage({ title, smallText }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [error, setError] = useState("");

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !data.firstName ||
      !data.lastName ||
      !data.number ||
      !data.address ||
      !data.city ||
      !data.pincode
    ) {
      setError("Please fill out the required fields");
      return;
    }

    const message = `Name: ${data.firstName} ${data.lastName}%0APhone Number: ${data.number}%0AAddress: ${data.address}%0ACity: ${data.city}%0APincode: ${data.pincode}`;
    const whatsappLink = `https://wa.me/919999226846/?text=${message}`;

    // Redirect to WhatsApp link
    window.location.href = whatsappLink;
  };

  return (
    <section className="py-12 lg:px-12 flex  bg-[#052131] lg:flex-row flex-col-reverse">
      <div className="container px-6">
        <h1 className="font-redhat text-yellow-100 lg:text-4xl text-2xl">
          {title}
        </h1>
        <div>{smallText}</div>
        <FormComponent
          onSubmit={handleSubmit}
          onChnage={handleData}
          error={error}
          value={data}
        />
      </div>
    </section>
  );
}
