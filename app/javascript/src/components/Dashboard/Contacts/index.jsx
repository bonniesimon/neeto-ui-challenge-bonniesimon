import React, { useState } from "react";

import { Container } from "neetoui/layouts";

import MenuBar from "./MenuBar";

const Contacts = () => {
  const [showMenuBar, setShowMenuBar] = useState(true); // eslint-disable-line

  return (
    <>
      <MenuBar showMenuBar={showMenuBar} />
      <Container>
        <div>Hello</div>
      </Container>
    </>
  );
};

export default Contacts;
