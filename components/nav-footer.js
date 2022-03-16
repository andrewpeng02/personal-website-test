const style = document.createElement('style');
style.textContent = `
.footer-nav {
	position: relative;
	left: 0rem;
	bottom: 5rem;

	margin-top: 20rem;
	padding-left: 1rem;
	padding-right: 1rem;

	border: 0.2rem solid black;
	border-radius: 0.5rem;

	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}

.nav-next {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}

.nav-prev {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.combine {
	display: flex;
	align-items: center;
}

.nav-p {
	margin-top: 0;
	max-width: 25rem;
}

.nav-p.right {
	text-align: right;
}

.nav-a {
	text-decoration: none;
}

.nav-h3 {
	font-weight: lighter;
}

.nav-p {
	font-weight: bold;
}
}`;

const navFooterComponent = document.createElement("template");
navFooterComponent.innerHTML = `
<div class="footer-nav">
	<a class="nav-a left" href="#" hidden>
		<div class="nav-previous">
			<div class="combine">
				<img
					src="../assets/mui_arrow_backwards.svg"
					alt="Backwards arrow"
				/>
				<h3 class="nav-h3">Previous</h3>
			</div>
			<p class="nav-p left">Title of prev blog</p>
		</div>
	</a>
	<a class="nav-a right" href="#" hidden>
		<div class="nav-next">
			<div class="combine">
				<h3 class="nav-h3">Next</h3>
				<img
					src="../assets/mui_arrow_forwards.svg"
					alt="Forwards arrow"
				/>
			</div>
			<p class="nav-p right">
				Title of next blog College Tuition Prediction [1/2]- Data
				Preparation
			</p>
		</div>
	</a>
</div>
`;

class NavFooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

		// Apply external styles to the shadow dom
		const linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', '/style.css');

		// Attach the created element to the shadow dom
		shadowRoot.appendChild(linkElem);

		shadowRoot.appendChild(style);
    shadowRoot.appendChild(navFooterComponent.content);
  }
}

customElements.define("nav-footer-component", NavFooterComponent);
