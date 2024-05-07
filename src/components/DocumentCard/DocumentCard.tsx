import React from "react"
import styles from "./DocumentCard.module.css"
import Link from "@docusaurus/Link"

type Props = {
  className?: string,
  to?: string,
  icon?: string,
  title?: string,
  description?: string
  children?: React.ReactNode
}

export default function DocumentCard(props: Props) {
  return (
    <Link className={`${styles.card} ${props.className}`} to={props.to}>
      <div>
        <img className={styles.img} src={props.icon} alt="Document Icon" />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Link>
  )
}