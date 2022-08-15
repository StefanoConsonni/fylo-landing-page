// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");

		// Scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		// Scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		// Close mobile naviagtion
		// if (link.classList.contains("main-nav-link")) headerEl.classList.toggle("nav-open");
	});
});

///////////////////////////////////////////////////////////
// Sticky Navbar

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
	function (entries) {
		const entry = entries[0];

		if (entry.isIntersecting === false) {
			document.body.classList.add("sticky");
		}

		if (entry.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
observer.observe(sectionHeroEl);
