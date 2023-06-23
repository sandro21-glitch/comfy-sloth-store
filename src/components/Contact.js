import React from "react";

const Contact = () => {
  return (
    <footer className="section md:py-[10rem]">
      <article className="section-center">
        <h3 className="font-bold">Join our newsletter and get 20% off</h3>
        <div className="grid md:grid-cols-2 md:gap-[10rem]">
          <p className="leading-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className="max-w-[500px]">
            <div className="flex items-center border-2 rounded-md overflow-hidden focus-within:border-black transition-all ease-in duration-150">
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full border-none border-r-0 outline-none p-3"
              />
              <button className="btn p-3 border-none capitalize">Subscribe</button>
            </div>
          </form>
        </div>
      </article>
    </footer>
  );
};

export default Contact;
