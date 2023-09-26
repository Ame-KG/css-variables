// how we can use css variables in javascript


// how to get the viables from the css
// we want to get the elements from the root of our document
// we need to get the computed style which is a function on the window
// inside the getPropertyVaulue method pass the variable you want to find
// it can also be used to get any style tho
console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--bg-body'))


// creating light/dark mode toggle

const darkThemeBTN = document.querySelector('#dark-theme-btn')
const lightThemeBTN = document.querySelector('#light-theme-btn')


darkThemeBTN.addEventListener('click', (e)=>{
	// setting the dark theme
	document.documentElement.style.setProperty('--bg-body', '#333')
})

lightThemeBTN.addEventListener('click', (e)=>{
	// setting light theme
	document.documentElement.style.setProperty('--bg-body', 'pink')
})