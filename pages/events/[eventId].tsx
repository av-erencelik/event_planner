import EventSummary from "../../components/eventdetail/event-summary";
import EventLogistics from "../../components/eventdetail/event-logistics";
import EventContent from "../../components/eventdetail/event-content";
import ErrorAlert from "../../components/error-alert";
import { GetStaticPropsContext } from "next";
import { getAllEvents, getEventById } from "../../helpers/api-utils";
import { Event } from "../../helpers/interfaces";
import Head from "next/head";

const EventPage = (props: { selectedEvent: Event }) => {
  const event = props.selectedEvent;
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const eventId = context.params!.eventId;
  const event = await getEventById(eventId);
  if (!event) {
    return {
      props: {
        selectedEvent: null,
      },
    };
  }
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
export default EventPage;
