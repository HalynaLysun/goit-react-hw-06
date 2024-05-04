import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

export default function App() {
  // const [contactData, setContactsData] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");

  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return contacts;
  // });
  // console.log(contactData);

  // const addContacts = (newContact) => {
  //   setContactsData((prevContacts) => {
  //     return [...prevContacts, { ...newContact, id: nanoid() }];
  //   });
  // };

  // const deleteContact = (contactId) => {
  //   setContactsData((prevContacts) => {
  //     return prevContacts.filter((con) => con.id !== contactId);
  //   });
  // };

  //

  // const arrContacts = contactData.filter((el) => {
  //   const contactName = el.name.toLowerCase();
  //   return contactName.includes(inputValue.toLowerCase());
  // });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
