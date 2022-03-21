import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

const Home = ({ products }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      {/* Header component */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
export default Home;

// GET >>> https://fakestoreapi.com/products
