import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Appp.styled';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Contact from './Contact/Contact';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onChangeSearchInput = e => {
    this.setState(() => ({
      filter: e.target.value,
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = ({ name, number }) => {
    const onList = this.state.contacts.find(contact => contact.name === name);
    if (onList) {
      alert('This contact is already added');
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [
          {
            id: nanoid(),
            name,
            number,
          },
          ...contacts,
        ],
      };
    });
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook" />
        <ContactForm formSubmitHandler={this.formSubmitHandler} />

        <Section title="Contacts" />
        <Contact
          states={this.state}
          onChangeSearchInput={this.onChangeSearchInput}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
