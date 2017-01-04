
var demo = new Vue({

	el: "#main",
	data: {

		searchString: "",

    articles: [
	    {
	        "title": "What You Need To Know About CSS Variables",
	        "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
	        "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-100x100.jpg"
	    },
	    {
	        "title": "Freebie: 4 Great Looking Pricing Tables",
	        "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
	        "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-100x100.jpg"
	    },
	    {
	        "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
	        "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
	        "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-100x100.jpg"
	    },
	    {
	        "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
	        "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
	        "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers-100x100.png"
	    },
	    {
	        "title": "Learn SQL In 20 Minutes",
	        "url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
	        "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/01/learn-sql-20-minutes-100x100.png"
	    },
	    {
	        "title": "Creating Your First Desktop App With HTML, JS and Electron",
	        "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
	        "image": "http://cdn.tutorialzine.com/wp-content/uploads/2015/12/creating-your-first-desktop-app-with-electron-100x100.png"
	    }
		]
	},

// 1) Use a computed property for more complex logic rather than just modifying in a standard template	
// 2) Although the same result could sometimes be achieved by creating and calling a method,
//    may be preferable to used computed property as this is cache based and will only re-evaluate when dependencies change
computed: {

	// This is what makes the real-time search and displaying/changing of results happen
	filteredArticles: function() {
		// Referencing the articles_arry and searchString properties above
		var articles_array = this.articles,
			searchString = this.searchString;

			// If nothing has been entered in the search input then array is returned in its entirety
			if(!searchString) { return articles_array; }

			// Otherwise...

			searchString = searchString.trim().toLowerCase();

			// With filter essentially creating new array based on presence of what is currently held in searchString
			articles_array = articles_array.filter(function(item) {
				// the indexOf method returns -1 when value is not found... so want to return all instances not meeting that criteria
				if(item.title.toLowerCase().indexOf(searchString) !== -1) {
					return item;
				}
			})

			return articles_array;
		}
	}
});