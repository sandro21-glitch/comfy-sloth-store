import React from "react";
import Hero from "../components/Hero";
import aboutImage from "../images/hero-about.jpeg";
const About = () => {
  return (
    <main>
      <Hero location={"/about"} />
      <section className="section section-center">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <img
            src={aboutImage}
            alt="about image"
            className="w-full h-[500px] object-cover block rounded-md"
          />
          <div>
            <h2 className="font-bold capitalize">Our Story</h2>
            <div className="w-20 h-1 bg-darkBrown mb-10"></div>
            <p className="text-lightBlue leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default About;
