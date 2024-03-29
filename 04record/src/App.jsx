import { Header } from './Header.jsx';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
// import Fields from './Fields.jsx';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setEmail('');
    setName('');
  };

  const removeEle = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div className="container">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" />
          <Button onClick={addData} className="bttn" variant="contained">
            <AddIcon/>
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>REMOVE</h4>
          {/* <Button variant="contained" color="error" onClick={removeEle}>
            REMOVE
          </Button> */}
        </div>
        {data.map((element, index) => {
          {/* return <Fields key={index} name={element.name} email={element.email} index={index} removeEle={() => removeEle(index)} />; */ }
          //OR

          return (
            <div key={index} style={{ marginTop: '15px', fontWeight: '100', fontSize: '15px' }} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button variant="contained" color="error" onClick={removeEle}>
                <DeleteIcon/>
              </Button>
            </div>
          )

        })}
      </div>
    </div>
  );
}

export default App;
