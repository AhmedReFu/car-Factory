import React from 'react';

const GoogleLoginW = ({handelGoogleSignIn}) => {
 return (
        <>
        <button onClick={handelGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
        </>
    );
};

export default GoogleLoginW;