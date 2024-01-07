import Button from '@mui/material/Button';

const Fields = ({ name, email, removeEle }) => {
  return (
    <div style={{ marginTop: '15px', fontWeight: '100', fontSize: '15px' }} className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Button variant="contained" color="error" onClick={removeEle}>
        REMOVE
      </Button>
    </div>
  );
};

export default Fields;
