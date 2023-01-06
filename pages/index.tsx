import Head from "next/head";
import EventList from "../components/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";
import { Events } from "../helpers/interfaces";

const HomePage = (props: { featuredEvents: Events }) => {
  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 10,
  };
}

export default HomePage;
