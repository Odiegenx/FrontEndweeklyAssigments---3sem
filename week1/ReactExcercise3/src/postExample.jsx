const postData = {
    username: 'example_user',
    password: 'example_password'
  };
  
  fetch('HomepageURL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(response => response.json())
  .then(data => {
    // Code to handle the data. 
  })
  .catch(error => {
    console.error('Error:', error);
  });