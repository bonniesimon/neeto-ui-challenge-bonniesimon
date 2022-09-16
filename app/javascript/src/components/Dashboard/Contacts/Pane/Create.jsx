import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACT_FORM_INITIAL_FORM_VALUES } from "../constants";

const Create = ({ fetchNotes, showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form
        isEdit={false}
        note={CONTACT_FORM_INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
