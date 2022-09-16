import React, { useEffect, useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
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
          <Table contacts={contacts} setShowDeleteAlert={setShowDeleteAlert} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
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
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchContacts}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
