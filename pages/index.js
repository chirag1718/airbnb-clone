import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { HeartIcon } from "@heroicons/react/solid";


export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        {/* small card section */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb5 ">Explore nearby</h2>

          {/* fetching data from api endpoint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                loaction={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        {/* medium card section */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* large card */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest outdoors"
          discription="Wishlists curated by Airbnb"
          buttonText="Get inspired"
        />
      </main>

      <Footer />

      <section className="font-sans flex items-center justify-center py-2">
          <p >Made with </p><HeartIcon className="h-6 fill-red-700"/><p> Chirag Sonar</p>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
