import React, { useState } from "react";

import { Formik, Form as NeetoUIForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA, CONTACTS_ROLES } from "../constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      refetch();
      onClose();
      Toastr.success("Contact added successfully");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <NeetoUIForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between space-x-2">
              <Input
                className="w-full flex-grow-0"
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                className="w-full flex-grow-0"
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
              />
            </div>
            <Input
              className="w-full flex-grow-0"
              label="Email"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              isClearable
              isSearchable
              className="w-full flex-grow-0"
              label="Roles"
              name="roles"
              options={CONTACTS_ROLES}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              iconPosition="right"
              label={isEdit ? "Update" : "Save Changes"}
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </NeetoUIForm>
      )}
    </Formik>
  );
};

export default Form;
