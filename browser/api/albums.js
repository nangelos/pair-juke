import axios from 'axios';

axios.get('/api/albums')
  .then(response => {
    return response.data;
  })
  .then(data => {
    console.log('success');
    console.log(data);
  })
  .catch(err => {
    console.error('error');
    console.error(err);
  });
