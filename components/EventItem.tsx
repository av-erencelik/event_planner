import Link from "next/link";
import React from "react";
import classes from "./EventItem.module.css";
const EventItem = (props: {
  title: String;
  image: String;
  date: string;
  location: String;
  id: String;
}) => {
  const { title, image, date, location, id } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <time>{formattedDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
