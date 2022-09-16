import * as yup from "yup";

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  roles: null,
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

export const CONTACTS_ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Owner",
    value: "owner",
  },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required(),
  roles: yup
    .object()
    .shape({
      label: yup.string().oneOf(CONTACTS_ROLES.map(role => role.label)),
      value: yup.string().oneOf(CONTACTS_ROLES.map(role => role.value)),
    })
    .nullable()
    .required("Roles is required"),
});

export const CONTACTS = [
  {
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "Wed, 14 Sep 2022 05:29:41.040649000 UTC +00:00",
    profilePic: "",
  },
  {
    name: "Jacob Jones",
    role: "Owner",
    email: "jacobjones@example.com",
    createdAt: "Thu, 15 Sep 2022 07:20:11.629179000 UTC +00:00",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "Wed, 14 Sep 2022 05:29:41.040649000 UTC +00:00",
    profilePic: "",
  },
  {
    name: "Jacob Jones",
    role: "Owner",
    email: "jacobjones@example.com",
    createdAt: "Thu, 15 Sep 2022 07:20:11.629179000 UTC +00:00",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
  },
];
