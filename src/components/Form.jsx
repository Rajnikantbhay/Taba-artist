import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function FormComponent({ onSubmit, onChnage, error, value }) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-xl bg-white lg:my-6 my-2 py-6 px-8 rounded-lg"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black  text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            name="firstName"
            value={value.firstName}
            onChange={onChnage}
            className="font-bold appearance-none block w-full bg-gray-200 text-black  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black  text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            name="lastName"
            value={value.lastName}
            onChange={onChnage}
            className="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="grid-password"
          >
            Contact Number
          </label>
          <input
            name="number"
            value={value.number}
            onChange={onChnage}
            className="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="number"
            placeholder="9999999999"
          />
          <p className="text-gray-600 text-xs italic">
            Enter a 10 digit valid Contact Number
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-black  text-xs font-bold mb-2"
            for="grid-password"
          >
            Address
          </label>
          <input
            name="address"
            value={value.address}
            onChange={onChnage}
            className="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="111-A Saket South Delhi..."
          />
          <p className="text-gray-600 text-xs italic">
            Enter your full address
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black  text-xs font-bold mb-2"
            for="grid-city"
          >
            City
          </label>
          <input
            name="city"
            value={value.city}
            onChange={onChnage}
            className="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="New Delhi"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="grid-zip"
          >
            Pincode
          </label>
          <input
            name="pincode"
            value={value.pincode}
            onChange={onChnage}
            className="font-bold appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="110080"
          />
        </div>
      </div>
      <Typography className="text-sm text-red-800 font-extrabold">
        {error}
      </Typography>
      <Button type="submit" className="md:my-2 bg-[#2196f3]">
        Book now
      </Button>
    </form>
  );
}

export default FormComponent;
