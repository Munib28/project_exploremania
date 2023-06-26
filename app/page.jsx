import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Explore and Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Your Outgiving With Us</span>
    </h1>
    <p className='desc text-center'>
      Exploremania is an open-source exploring tool for the modern<br />
      world to discover, create, and share creative ideas
    </p>

    <Feed />
  </section> 
);

export default Home;
