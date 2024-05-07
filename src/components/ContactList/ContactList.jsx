import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  const nameContact = useSelector((state) => state.filter.name);
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameContact.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filterContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
}
