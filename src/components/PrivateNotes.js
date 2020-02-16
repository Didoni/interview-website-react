import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import InfoBanner from './InfoBanner';

function PrivateNotes(props) {
  function handleSignout() {
    props.onSignout();
    props.history.push('/signin');
  }

  const { user } = props;
  const welcomeText = `Welcome ${user}. You are logged into your Private Notest page.`;
  return (
    <div className="form-wrapper">
      <InfoBanner text={welcomeText} success>
        <Button color="inherit" onClick={handleSignout}>Sign out</Button>
      </InfoBanner>
    </div>
  );
}

PrivateNotes.propTypes = {
  onSignout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default PrivateNotes;
