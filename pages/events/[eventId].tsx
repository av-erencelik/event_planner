import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/eventdetail/event-summary";
import EventLogistics from "../../components/eventdetail/event-logistics";
import EventContent from "../../components/eventdetail/event-content";
import ErrorAlert from "../../components/error-alert";
const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId as string);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }
  return (
    <>
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

export default EventPage;
