const expenseValidation = (values) => {
  const errors = {};
  if (!values.date) {
    errors.date = "Please choose date";
  }
  if (!values.type) {
    errors.date = "Please choose type";
  }
  if (!values.description) {
    errors.description = "Please enter descriptions";
  }
  if (!values.amount) {
    errors.amount = "Please enter amount";
  }

  return errors;
  
};

export default expenseValidation;
