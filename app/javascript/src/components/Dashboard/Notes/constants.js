import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const FORM_CONTACT_OPTIONS = [
  {
    label: "Ronald Richards",
    value: "ronald-richards",
  },
  {
    label: "Oliver Smith",
    value: "oliver-smith",
  },
  {
    label: "Jacob Jones",
    value: "jacob-jones",
  },
];

export const FORM_TAG_OPTIONS = [
  {
    label: "Getting Started",
    value: "getting-started",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "user-flow",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
  {
    label: "V2",
    value: "v2",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup
        .string()
        .oneOf(FORM_CONTACT_OPTIONS.map(contact => contact.label)),
      value: yup
        .string()
        .oneOf(FORM_CONTACT_OPTIONS.map(contact => contact.value)),
    })
    .nullable()
    .required("Contact should be assigned"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(FORM_TAG_OPTIONS.map(tag => tag.label)),
        value: yup.string().oneOf(FORM_TAG_OPTIONS.map(tag => tag.value)),
      })
    )
    .min(1, "At least 1 Tag is required")
    .required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_MENUBAR_OPTIONS = [
  {
    title: "All",
    count: 200,
    active: true,
  },
  {
    title: "Users",
    count: 80,
    active: false,
  },
  {
    title: "Leads",
    count: 60,
    active: false,
  },
  {
    title: "Visitors",
    count: 60,
    active: false,
  },
];

export const NOTES_MENUBAR_SEGMENTS = [
  {
    title: "Europe",
    count: 80,
  },
  {
    title: "Middle-East",
    count: 60,
  },
  {
    title: "Asia",
    count: 60,
  },
];

export const NOTES_MENUBAR_TAGS = [
  {
    title: "Sales",
    count: 80,
  },
  {
    title: "Finance",
    count: 60,
  },
  {
    title: "User Experience",
    count: 60,
  },
];
