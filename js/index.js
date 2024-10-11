console.log('index.js')
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}
const loadPet = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => displayPet(data.pets))
    .catch(error => console.log(error))
}
const loadCategoryPet = (category) => {
  console.log(category)
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res => res.json())
    .then(data => displayPet(data))
    .catch(error => console.log(error))
}
const displayPet = (pets) => {
  console.log(pets)
  const petContainer = document.getElementById("pets")
  pets.forEach((pet) => {
    console.log(pet)
    const card = document.createElement('card')
    card.classList = "card border p-4 "
    card.innerHTML = `
<figure>
    <img
     class="rounded"  src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title" >${pet.pet_name}</h2>
    <p class=""> breed: ${pet.breed}</p>
    <p class=""> birth: ${pet.date_of_birth}</p>
    <p class=""> gender: ${pet.gender}</p>
    <p class=""> price: ${pet.price}$</p>
    
    <hr>
    <div class="card-actions">
      <button class="btn">Buy Now</button>
      <button class="btn">Buy Now</button>
    </div>
  </div>
`
    petContainer.append(card)
  })
}
// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories")
  categories.forEach(item => {
    console.log(item)
    const buttonContainer = document.createElement("div")
    buttonContainer.innerHTML = `
<button onclick= "loadCategoryPet(${item.category})" class="btn">
${item.category}
</button>
`
    categoriesContainer.append(buttonContainer)
  }
  )
}
loadCategories()
loadPet()
