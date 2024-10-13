"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus
        vel turpis porttitor fermentum. Nullam vel viverra neque, at aliquet ex.
        Sed interdum, metus in tristique consectetur, felis nisi semper diam,
        non consectetur velit nisi nec lectus. Nullam tincidunt diam vel urna
        euismod laoreet. Nulla facilisi. Aliquam erat volutpat. Nullam et turpis
        ac quam tristique consectetur.
      </p>
      <button
        className="bg-sky-500 px-3 py-2 rounded-md"
        onClick={() => {
          alert("Processing logic...");
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
};

export default About;
