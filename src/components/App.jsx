import ContactForm from "./ContactForm/ContactForm";
// import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import * as Yup from "yup";

export default function App() {
  // const [contactData, setContactsData] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");

  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return contacts;
  // });
  // console.log(contactData);

  // const [inputValue, setInputValue] = useState("");

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

  // const handleChange = (evt) => {
  //   setInputValue(evt.target.value);
  // };

  // const arrContacts = contactData.filter((el) => {
  //   const contactName = el.name.toLowerCase();
  //   return contactName.includes(inputValue.toLowerCase());
  // });

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm init={initialValues} valid={FeedbackSchema} />
      {/* <SearchBox input={inputValue} onChange={handleChange} /> */}
      <ContactList />
    </div>
  );
}
