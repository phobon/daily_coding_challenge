/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:
  
  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list
  
  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/


/* DO NOT MODIFY */
const rootElement = document.querySelector('.foods');

const foodData = [
  {
    id: 1,
    image: '🌮',
    name: 'taco'
  },
  {
    id: 2,
    image: '🍔',
    name: 'burger'
  },
  {
    id: 3,
    image: '🍆',
    name: 'eggplant'
  },
  {
    id: 4,
    image: '🍎',
    name: 'apple'
  },
  {
    id: 5,
    image: '🥞',
    name: 'pancakes'
  },
];
/* DO NOT MODIFY */


/** YOUR CODE BELOW **/
class Foods {
  constructor(rootElement, data) {
    // Set some fields in our class here
    this.rootElement = rootElement;
    this.data = data;
    
    // Add an event listener here that bubbles up
    this.rootElement.addEventListener('click', ({ target }) => {
      // Get the index of what we want to remove
      const index = target.parentNode.getAttribute('data-index');
      this.data.splice(index, 1);
      this.render();
    });
  }
  
  render() {
    // Clear the rootElement here.
    const allFoods = document.querySelectorAll('.food');
    allFoods.forEach(f => this.rootElement.removeChild(f));
    
    // Iterate over the data array.
    this.data.forEach((d, i) => {
      // Create a new element (just make it a div, possibly should be a ul/ol with li)
      const e = document.createElement('div');
      e.classList.add('food');
      
      // Set an attribute to identify it for when we remove it later
      // Could use the id here, but, I think using array index might be cleaner
      e.setAttribute('data-index', i);
      
      // Splat the data into some HTML
      e.innerHTML = `<span>${d.id}</span><span>${d.image}</span><span>${d.name}</span>`;
      
      // Append it to the rootElement parent
      this.rootElement.appendChild(e);
      // Use a document fragment here for performance reasons
      // const fragment = document.createDocumentFragment();
      // fragment.appendChild(...);
      // this.rootElement.appendChild(fragment);
    });
  }
}

// document.createDocumentFragment

const foods = new Foods(rootElement, foodData);
foods.render();