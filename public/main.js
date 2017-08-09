const url = '/'

document.addEventListener('click', function(event) {
  console.log('you clicked on', event)
  if (event.target.className === 'deleteButton') {
    console.log('... and this is a delete button!')

    const element = event.target

    let id = element.getAttribute('data-id')
    let _url = url + id
    fetch(_url, { method: 'delete' })
      .then(response => response.json())
      // .then(json => {
      //   if (json.status === 'ok') {
      //     window.location = json.newUrl
      //   }
      // })
      .then(response => {
        // if a redirect, tell the BROWSER to follow it
        window.location = response.url
      })
      .catch(error => {
        console.log('error', error)
      })
  }
})

document.addEventListener('click', function() {
  if (event.target.className === 'editButton') {
    let _url = 'http://localhost:3000/input'
    fetch(url, { method: 'put' })
      .then(response => response.json())
      .then(response => {
        // if a redirect, tell the BROWSER to follow it
        if (response.redirected) {
          window.location = response.url
        }
      })
      .catch(error => {
        console.log('error', error)
      })
  }
})
