const previous = document.querySelector('.previousImage')
const image = document.querySelector('.image')
const next = document.querySelector('.nextImage')

let count = 0

const contentPhotos = [
  {
    'link': 'https://images.unsplash.com/photo-1621610212025-da775e84bea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'title': 'Sagrado Coração de Jesus',
  },
  {
    'link': 'https://images.unsplash.com/photo-1552766990-c63f02cf3c5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'title': 'Santo Antônio e o menino Jesus',
  },
  {
    'link': 'https://images.unsplash.com/photo-1546374232-3ec12be8caa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'title': 'Nossa Senhora e o menino Jesus',
  },
  {
    'link': 'https://images.unsplash.com/photo-1613163214945-4cf42c96fa12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    'title': 'São José e o menino Jesus',
  },
  {
    'link': 'https://images.unsplash.com/photo-1494870703355-d05125562171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'title': 'Jesus Cristo cruxificado',
  },
  {
    'link': 'https://images.unsplash.com/photo-1528357136257-0c25517acfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0aG9saWN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
    'title': 'Santo Terço',
  },
  {
    'link': 'https://images.unsplash.com/photo-1578348397311-389400abe009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    'title': 'São José e o menino Jesus',
  },
  {
    'link': 'https://images.unsplash.com/photo-1655604005148-6afa6b64d6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'title': 'Nossa Senhora e o menino Jesus',
  },
]

const nextImage = () => {
  if (count === contentPhotos.length) {
    count = 0
  }
  for (const i of contentPhotos) {
    image.setAttribute('src', contentPhotos[count].link)
    image.setAttribute('title', contentPhotos[count].title)
    count++
    return
  }
}

const previousImage = () => {
  if (count > 0) {
    for (const i of contentPhotos) {
      count--
      image.setAttribute('src', contentPhotos[count].link)
      image.setAttribute('title', contentPhotos[count].title)
      return
    }
  }
  count = contentPhotos.length
  previousImage()
}

nextImage()

previous.addEventListener('click', previousImage)
next.addEventListener('click', nextImage)