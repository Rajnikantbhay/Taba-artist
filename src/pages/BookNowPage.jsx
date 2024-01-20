import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import EarthCanvas from '../components/EarthCanvas';
import { slideIn } from "../components/Motion";
import { motion } from "framer-motion";
import StarsCanvas from "../components/Stars";




export default function BookNowPage() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    address: '',
    city: '',
    pincode: ''
  });
  const [error, setError] = useState('')


  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.firstName || !data.lastName || !data.number || !data.address || !data.city || !data.pincode) {
      setError('Please fill out the required fields')
      return;
    }

    const message = `Name: ${data.firstName} ${data.lastName}%0APhone Number: ${data.number}%0AAddress: ${data.address}%0ACity: ${data.city}%0APincode: ${data.pincode}`;
    const whatsappLink = `https://wa.me/8920237263/?text=${message}`;

    // Redirect to WhatsApp link
    window.location.href = whatsappLink;
  };

  return (
    <section className="py-12 lg:px-12 flex  bg-[#08416A] lg:flex-row flex-col-reverse">
      <div className="container px-6">
        <h1 className="font-redhat text-yellow-100 lg:text-4xl text-2xl">Book now by filling this form</h1>
        <p className="text-[#aaaaaa]">All the fields are <i className="text-white">mandatory</i> and should be filled <i className="text-white">correctly</i></p>
        <small className="text-[#aaaaaa] font-bold">Currently available in Delhi only</small>

        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-black lg:my-6 my-2 py-6 px-8 rounded-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-[#f1f1f1]  text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input name="firstName" value={data.firstName} onChange={handleData} class="font-bold appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-[#f1f1f1]  text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input name="lastName" value={data.lastName} onChange={handleData} class="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-[#f1f1f1] text-xs font-bold mb-2" for="grid-password">
                Contact Number
              </label>
              <input name="number" value={data.number} onChange={handleData} class="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder='9999999999' />
              <p class="text-gray-600 text-xs italic">Enter a 10 digit valid Contact Number</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-[#f1f1f1]  text-xs font-bold mb-2" for="grid-password">
                Address
              </label>
              <input name="address" value={data.address} onChange={handleData} class="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder='111-A Saket South Delhi...' />
              <p class="text-gray-600 text-xs italic">Enter a 10 digit valid Contact Number</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-[#f1f1f1]  text-xs font-bold mb-2" for="grid-city">
                City
              </label>
              <input name="city" value={data.city} onChange={handleData} class="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="New Delhi" />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-[#f1f1f1] text-xs font-bold mb-2" for="grid-zip">
                Pincode
              </label>
              <input name="pincode" value={data.pincode} onChange={handleData} class="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="110080" />

            </div>
          </div>
          <Typography className='text-sm text-red-800 font-extrabold'>{error}</Typography>
          <Button type="submit" className="md:my-2 bg-[#2196f3]">
            Book now
          </Button>
        </form>
      </div>
    </section>
  );
}
