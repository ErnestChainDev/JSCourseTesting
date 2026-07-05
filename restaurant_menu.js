const breakfastMenu = ['Pancakes - $8.99', 'Eggs Benedict - $12.99', 'Oatmeal - $6.99', 'Frittata - $10.99'];
const mainCourseMenu = ['Steak - $24.99', 'Pasta - $16.99', 'Burger - $13.99', 'Salmon - $18.99'];
const dessertMenu = ['Cake - $7.99', 'Ice Cream - $5.99', 'Pudding - $6.99', 'Fruit Salad - $8.99'];

// Display total items
document.getElementById('breakfastTotalItems').textContent =
    `Total Items: ${breakfastMenu.length}`;
document.getElementById('maincourseTotalItems').textContent =
    `Total Items: ${mainCourseMenu.length}`;
document.getElementById('dessertTotalItems').textContent =
    `Total Items: ${dessertMenu.length}`;

// Breakfast Menu (map)
const breakfastHTML = breakfastMenu
    .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
    .join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastHTML;

// Main Course (forEach)
let mainCourseHTML = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseHTML += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseHTML;

// Dessert Menu (for loop)
let dessertHTML = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertHTML += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertHTML;