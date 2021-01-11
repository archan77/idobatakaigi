import React ,{useState} from 'react';

import SignIn from './SignIn';

export default () => {
  const [name,setName] = useSteate('');
  console.log ({ name });

  return <SignIn setName={setName} />;
};
