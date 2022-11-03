import * as Yup from 'yup';

/**
 * Schema for Beer.
 */
const myBeerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  genre: Yup.string().required('Genre is required'),
  description: Yup.string().trim().required('Description is required'),
});

export default myBeerSchema;
