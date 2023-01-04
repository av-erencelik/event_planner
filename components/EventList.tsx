import React, { Key } from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";
const EventList = (props: {
  items: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
  }[];
}) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id as Key}
            id={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
