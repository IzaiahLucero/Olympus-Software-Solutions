import * as yup from "yup";

export const addCustomerSchema = yup.object().shape({
  firstName: yup.string().min(3).required("Required"),
  lastName: yup.string().min(3).required('Required'),
  mailingAddress: yup.string().min(5).required("Required"),
  mailingCity: yup.string().min(5).required("Required"),
  mailingState: yup.string().min(2).max(2).required('Required'),
  mailingZip: yup.string().min(5).max(5).required('Required'),
  primaryEmail: yup.string().email("Please enter a valid email").required("Required"),
  secondaryEmail: yup.string().email("Please enter a valid email"),
  primaryPhone: yup.string().min(10).required("Required"),
  secondaryPhone: yup.string().min(10),
});