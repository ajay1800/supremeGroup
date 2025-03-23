import React from "react";
import { useForm } from "react-hook-form";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    alert("Form submitted successfully!");
    console.log(data);
  };

  return (
    <section className="bg-blue text-white h-[550px] flex flex-row justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-row justify-between items-center">
        {/* Left Section (Address & Contact Info) */}
        <div className="w-xl h-[400px]">
          <h2 className="text-5xl font-normal">Get in touch</h2>
          <div className="border-b-4 w-14 my-6" />
          <p className="mt-2 text-xl">For general enquiries</p>
          <p className="mt-4 flex flex-col text-lg text-neutral-200">
            <strong>Address :</strong> 110, 16th Road, Chembur, Mumbai - 400071
          </p>
          <p className="mt-2 flex flex-col text-lg text-neutral-200">
            <strong>Phone :</strong> +91 22 25208822
          </p>
          <p className="mt-2 flex flex-col text-lg text-neutral-200">
            <strong>Email :</strong> info@supremegroup.co.in
          </p>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-xl flex flex-col justify-between h-[400px]"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Full name"
            className="w-full py-3 bg-transparent text-white border-b-3 border-white focus:outline-0 text-lg font-semibold"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full py-3 bg-transparent text-white border-b-3 border-white focus:outline-0 text-lg font-semibold"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="w-full py-3 bg-transparent text-white border-b-3 border-white focus:outline-0 text-lg font-semibold"
          />
          {errors.subject && (
            <p className="text-red-500">Subject is required</p>
          )}

          <input
            {...register("message", { required: true })}
            placeholder="Message"
            className="w-full py-3 bg-transparent text-white border-b-3 border-white focus:outline-0 text-lg font-semibold"
          />
          {errors.message && (
            <p className="text-red-500">Message is required</p>
          )}

          <button
            type="submit"
            className="bg-white text-black w-40 p-3 font-semibold rounded-4xl hover:bg-gray-200 mt-10"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
