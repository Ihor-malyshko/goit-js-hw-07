// Get all category items (li.item elements from ul#categories)
const categories = document.querySelectorAll('ul#categories > li.item');

// Task 1: Count and output total number of categories
console.log(`Number of categories: ${categories.length}`);

// Task 2: For each category, output heading text and number of items
categories.forEach(category => {
  const heading = category.querySelector('h2');
  const items = category.querySelectorAll('ul > li');
  
  console.log(`Category: ${heading.textContent}`);
  console.log(`Number of items: ${items.length}`);
});
