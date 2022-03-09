const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
	header {
		margin-top: 1.5rem;
		margin-bottom: 6rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: black;
	}

	.title {
		font-size: 2.2rem;
		font-weight: bold;
	}

	.header-subheaders {
		display: flex;
	}

	.header-subheading {
		font-size: 1.6rem;
		color: rgb(100, 100, 100);

		margin: 0.5rem;
		margin-left: 2rem;
	}
</style>
<header>
		<a href="http://127.0.0.1:5500" class="title">Andrew Peng</a>

		<div class="header-subheaders">
			<a href="http://127.0.0.1:5500" class="header-subheading">Writings</a>
			<a href="http://127.0.0.1:5500/projects.html" class="header-subheading">Projects</a>
			<a href="http://127.0.0.1:5500/about.html" class="header-subheading">About</a>
		</div>
	</header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", HeaderComponent);
