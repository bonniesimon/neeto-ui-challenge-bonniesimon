import * as yup from "yup";

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const CONTACTS_MENUBAR_OPTIONS = [
  {
    title: "All",
    count: 0,
    isActive: true,
  },
  {
    title: "Archived",
    count: 0,
    isActive: false,
  },
  {
    title: "Completed",
    count: 0,
    isActive: false,
  },
  {
    title: "Phase 2",
    count: 0,
    isActive: false,
  },
];

export const CONTACTS_MENUBAR_SEGMENTS = [];
export const CONTACTS_MENUBAR_TAGS = [];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const CONTACTS = [
  {
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "Feb, 5, 2021",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Owner",
    email: "jacobjones@example.com",
    createdAt: "Feb, 5, 2021",
    profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "Feb, 5, 2021",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Owner",
    email: "jacobjones@example.com",
    createdAt: "Feb, 5, 2021",
    profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];
