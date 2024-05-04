import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const obj = useSelector((state) => state.contacts);
  const contacts = obj.items;
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
}
