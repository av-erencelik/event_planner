import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";
import classes from "./Button.module.css";

const Button = (props: { link?: string; children: ReactNode[] | string }) => {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }
  return <button className={classes.btn}>{props.children}</button>;
};

export default Button;
