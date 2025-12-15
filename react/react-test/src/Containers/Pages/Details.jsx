import { Outlet } from 'react-router';

const Details = () => {
  return (
    <>
      <div>Shared Details</div>
      <Outlet />
    </>
  );
};

export default Details;
