import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";
import { getAllEvents } from "../../helpers/api-utils";
import { Events } from "../../helpers/interfaces";

const AllEventsPage = (props: { events: Events }) => {
  const events = props.events;
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
export default AllEventsPage;
