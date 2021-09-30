import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './contactForm/ContactForm ';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact =>
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: uuidv4(), ...contact }],
    }));

  isThereThisContact = name =>
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  addToFilterState = e => {
    const filter = e.target.value;
    this.setState({
      filter: filter,
    });
  };

  findContact = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  render() {
    // console.log(this.deleteContact());
    return (
      <>
        <div className={styles.box}>
          <h1>Phonebook</h1>
          <ContactForm
            isThereThisContact={this.isThereThisContact}
            addContact={this.addContact}
          />

          <h2>Contacts</h2>
          <Filter
            addToFilterState={this.addToFilterState}
            filter={this.state.filter}
          />
          <ContactList
            findContact={this.findContact}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
