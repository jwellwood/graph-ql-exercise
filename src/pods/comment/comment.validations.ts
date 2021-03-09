import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    comment: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
