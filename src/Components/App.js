import React  ,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';  
import ContactList from './ContactList';

function App() {
  const LOCAL_KEY_STORAGE="contacts";
  

  const [contacts, setcontacts] = useState(() => {
  const stored = localStorage.getItem(LOCAL_KEY_STORAGE);
  return stored ? JSON.parse(stored) : [];
});

  const addContactHandeler=(contact)=>{
     
      setcontacts([...contacts,contact]);
  };

  useEffect(()=>{
  localStorage.setItem(LOCAL_KEY_STORAGE,JSON.stringify(contacts));
},[contacts])


useEffect(() => {
  const storedContacts = JSON.parse(
    localStorage.getItem(LOCAL_KEY_STORAGE)
  );
  if (storedContacts) setcontacts(storedContacts);
}, []);



  return (
    <div className='ui container'> 
      <Header />
      <AddContact addContactHandeler={addContactHandeler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
