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

const dinoForm = document.querySelector('form.dino')

if (dinoForm) {
  dinoForm.addEventListener('submit', function(event) {
    event.preventDefault()

    console.log('you clicked on', event)
    const element = event.target
    let id = element.getAttribute('data-id')

    // use fetch to make an API request

    // if (event.target.clasName === 'submit') {
    //   console.log('This is submit', event)
    // }
  })
}
