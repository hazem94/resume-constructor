import AddEditExperienceForm from "forms/AddEditExperienceForm";
import addEditExperienceValidate from "forms/addEditExperienceValidate";
import { FORM_NAMES } from "forms/formNames";
import React from "react";
import { reduxForm } from "redux-form";

// ##############   Helper Components    ##############
/**
 *
 * @param {object} props
 * @param {Function} props.handleSubmit
 * @param {boolean} props.submitting
 * @param {boolean} props.invalid
 * @param {string} props.formName
 */
const _AddExperienceForm = (props) => {
  const {
    handleSubmit,
    submitting,
    invalid,
    anyTouched,
    submitFailed,
    submitSucceeded,
  } = props;
  const isDisabled = () => {
    if (invalid || !anyTouched || (!submitFailed && submitSucceeded))
      return true;
    return false;
  };

  return (
    <AddEditExperienceForm
      handleSubmit={handleSubmit}
      isDisabled={isDisabled()}
      submitting={submitting}
    />
  );
};

// ###############    Main Component    ###############
const AddExperience = reduxForm({
  form: FORM_NAMES.addExperience,
  validate: addEditExperienceValidate,
  touchOnChange: true,
})(_AddExperienceForm);

export default AddExperience;
