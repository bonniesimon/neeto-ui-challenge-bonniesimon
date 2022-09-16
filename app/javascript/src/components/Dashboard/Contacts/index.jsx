import React, { useEffect, useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS } from "./constants";
import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    setContacts(CONTACTS);
  };

  return (
    <>
      <MenuBar showMenuBar={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(showMenuBar => !showMenuBar)}
          title="Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {contacts.length ? (
          <Table contacts={contacts} />
        ) : (
          <EmptyState
            image={() => null}
            primaryAction={() => setShowNewContactPane(true)}
            primaryActionLabel="Add Contact"
            subtitle="Add your contacts"
            title="Looks like you have no contacts yet!"
          />
        )}
        <NewContactPane
          fetchNotes={() => null}
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
      </Container>
    </>
  );
};

export default Contacts;
