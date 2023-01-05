import React, { Key } from "react";
import { Events } from "../helpers/interfaces";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";
const EventList = (props: { items: Events }) => {
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
