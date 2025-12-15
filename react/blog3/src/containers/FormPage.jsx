import { ReduxForm } from "./index";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(() => ({
  // width: 120,
  // height: 120,
  padding: 10,
  maxWidth: 400,
  margin: '20px auto',
  textAlign: 'center',
}));

const FormPage = () => {
  return (
    <>
      {/* <DemoPaper variant="outlined">Form Page</DemoPaper> */}
      <ReduxForm />
    </>
  );
};

export default FormPage;
