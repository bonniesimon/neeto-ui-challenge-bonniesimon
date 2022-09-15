import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/Create";

const Contacts = () => {
  const [showMenuBar, setShowMenuBar] = useState(true); // eslint-disable-line
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
      </Container>
      <NewContactPane
        fetchNotes={() => null}
        setShowPane={setShowNewContactPane}
        showPane={showNewContactPane}
      />
    </>
  );
};

export default Contacts;
