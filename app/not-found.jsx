import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Sorry, page not found :P</p>
      <Link href="/">Home</Link>
    </section>
  );
};

export default NotFound;
