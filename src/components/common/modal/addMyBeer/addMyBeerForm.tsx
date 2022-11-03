import { Formik } from 'formik';
import * as React from 'react';

import myBeerSchema from '../../../../schema/myBeer';
import { MyBeerPayload } from '../../../../types/Beer';

import houzzImage from '../../../../assets/images/houzz.png';

interface InjectedProps {
  handleFormSubmit: (payload: MyBeerPayload) => void;
  closeModal: () => void;
}

function AddMyBearForm(props: InjectedProps) {
  const { handleFormSubmit, closeModal } = props;
  return (
    <Formik
      initialValues={{
        name: '',
        genre: '',
        description: '',
      }}
      validationSchema={myBeerSchema}
      onSubmit={async (values) => {
        const payload = {
          name: values.name.trim(),
          genre: values.genre.trim(),
          description: values.description.trim(),
        };

        await handleFormSubmit(payload);
        closeModal();
      }}
    >
      {({ handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className="grid-x grid-margin-x mt-5">
            <div className="cell small-4">
              <label>
                <img src={houzzImage} style={{ width: '80px', height: '150px', border: '1px solid black' }} alt="" />
              </label>
            </div>
            <div className="cell small-12 mt-5">
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Beer name"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && errors.name}
              </label>
            </div>
            <div className="cell small-12">
              <label>
                <input
                  type="text"
                  placeholder="Genre"
                  name="genre"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.genre && touched.genre && errors.genre}
              </label>
            </div>
            <div className="cell small-12">
              <label>
                <textarea
                  placeholder="description"
                  name="description"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.description && touched.description && errors.description}
              </label>
            </div>
          </div>
          <div className="grid-x grid-margin-x flex-container align-right">
            <button
              className="button large-2 small m-2 secondary hollow"
              type="reset"
              onClick={closeModal}
              value="Reset"
            >
              Cancel
            </button>
            <button className="button large-2 small m-2" type="submit" disabled={isSubmitting} value="Submit">
              Save
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default AddMyBearForm;
