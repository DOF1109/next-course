import User from "@/components/User";

export const metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <User />
    </section>
  );
};

export default Home;
