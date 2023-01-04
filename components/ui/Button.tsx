import Link from "next/link";
import { ReactNode } from "react";
import classes from "./Button.module.css";

const Button = (props: { link: string; children: ReactNode[] }) => {
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
};

export default Button;
