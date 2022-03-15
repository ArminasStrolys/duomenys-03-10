const expenseValidation = (value) => {
  const errors = {};
  if (!value.date) {
    errors.date = "Please choose date";
  }
  if (!value.type) {
    errors.type = "Please choose type";
  }
  if (!value.description) {
    errors.description = "Please enter descriptions";
  }
  if (!value.amount) {
    errors.amount = "Please enter amount";
  }

  return errors;
  
};

export default expenseValidation;
