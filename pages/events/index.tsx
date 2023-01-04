import { useRouter } from "next/router";
import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
