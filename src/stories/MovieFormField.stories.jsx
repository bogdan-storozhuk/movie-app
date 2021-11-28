import MovieFormField from "../components/movieFormField";

const commonProps = {
  handleChange: () => {},
  handleBlur: () => {},
  errors: {},
  touched: {},
};

export default {
  title: "FormFields/MovieFormField",
  component: MovieFormField,
};

const Template = (args) => <MovieFormField {...args} />;

export const MovieFormInput = Template.bind({});
MovieFormInput.args = {
  ...commonProps,
  text: "RELEASE DATE",
  name: "releaseDate",
  value: "test value",
};

export const OverviewTextarea = Template.bind({});
OverviewTextarea.args = {
  ...commonProps,
  text: "OVERVIEW",
  name: "overview",
  value: "test value",
};

export const GenreMultiSelect = Template.bind({});
GenreMultiSelect.args = {
  ...commonProps,
  text: "GENRE",
  name: "genres",
  value: [
    {
      name: "Action",
    },
    {
      name: "Adventure",
    },
    {
      name: "Science Fiction",
    },
  ],
};
