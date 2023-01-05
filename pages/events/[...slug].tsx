import EventList from "../../components/EventList";
import { getFilteredEvents } from "../../helpers/api-utils";
import ResultTitle from "../../components/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/error-alert";
import { GetServerSidePropsContext } from "next";
import { Events } from "../../helpers/interfaces";
const FilteredEventsPage = (props: {
  events?: Events;
  hasError?: boolean;
  date: { year: number; month: number };
}) => {
  const filteredEvents = props?.events;
  if (props?.hasError || filteredEvents?.length == 0) {
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
      <ResultTitle date={new Date(props.date.year, props.date.month - 1)} />
      <EventList items={filteredEvents!} />
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const filterData = params!.slug;

  const filteredYear = filterData![0];
  const filteredMonth = filterData![1];
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
    return {
      props: {
        hasError: true,
      },
    };
  }
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventsPage;
