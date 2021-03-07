import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './search.validations';

interface Props {
  input: { search: string };
  onSearch: (value) => void;
  onChange: (e) => void;
  onClear: () => void;
}

export const SearchBar: React.FC<Props> = ({
  input,
  onSearch,
  onChange,
  onClear,
}) => {
  return (
    <Formik
      onSubmit={onSearch}
      initialValues={input}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form>
          <TextFieldComponent
            name="search"
            label="Search"
            placeholder="Search for a character"
            onChange={onChange}
            value={input.search}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
          <Button onClick={onClear}>Clear</Button>
        </Form>
      )}
    </Formik>
  );
};
