import { useNavigate, Navigate } from 'react-router-dom';

const usePermissions = () => {
  // Simulate permission check (in a real app, this would check user roles/permissions)
  const hasAccess = false; // Change to true to simulate access granted

  return hasAccess;
};

const About = () => {
  const navigate = useNavigate();
  const hasAccess = usePermissions(); //false
  console.log('About page access:', hasAccess);

  if (!hasAccess) {
    return <Navigate to='/403' />;
  };

  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam consectetur id consequuntur consequatur iure optio quia omnis! Laboriosam ut odit ducimus nobis esse amet! Numquam natus ad architecto at!
      </p>
    </>
  );
};

export default About;
