import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignupForm from './signupForm';

import { CreateUser } from '../../actions/user';
import { SignupPayload } from 'types/Signup';

interface DispatchPropsInterface {
  CreateUser: (payload: SignupPayload) => void;
}

function SignUp(props: DispatchPropsInterface) {
  let navigate = useNavigate();

  const { CreateUser } = props;
  const handleFormSubmit = async (payload: SignupPayload) => {
    try {
      await CreateUser(payload);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-container align-center">
      <div className="callout m-24" style={{ width: '30%' }}>
        <SignupForm handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  CreateUser,
};

export default connect<null, DispatchPropsInterface>(null, mapDispatchToProps)(SignUp);
