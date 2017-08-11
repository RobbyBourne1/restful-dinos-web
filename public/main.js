const url = '/'

document.addEventListener('click', function(event) {
  console.log('you clicked on', event)
  const element = event.target
  let id = element.getAttribute('data-id')

  if (event.target.className === 'deleteButton') {
    console.log('... and this is a delete button!')
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
  } else if (event.target.className === 'editButton') {
    let _url = '/edit/' + id
    window.location = _url
  }
})

document.addEventListener('click', function() {})
