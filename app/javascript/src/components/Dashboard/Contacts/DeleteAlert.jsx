import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ refetch, onClose }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      onClose();
      refetch();
      Toastr.success("Contact deleted successfully");
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to delete the note? This action cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
