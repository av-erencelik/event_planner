import { useRouter } from "next/router";
import EventList from "../../components/EventList";
import { getFilteredEvents } from "../../dummy-data";
import ResultTitle from "../../components/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/error-alert";
const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter!</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  return (
    <div>
      <ResultTitle date={new Date(numYear, numMonth - 1)} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
