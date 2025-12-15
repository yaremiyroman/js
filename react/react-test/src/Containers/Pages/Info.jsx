import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';

const Info = () => {
  const [someName, setSomeName] = useState('some Name');

  return (
    <>
      <Outlet nameProp={someName} />
    </>
  );
};

export default Info;
