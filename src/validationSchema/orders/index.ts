import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_details: yup.string(),
  customer_id: yup.string().nullable(),
  business_id: yup.string().nullable(),
});
