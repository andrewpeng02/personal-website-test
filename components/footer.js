const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<style>
	footer {
		margin-top: 6rem;
		margin-bottom: 1.5rem;
		
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.footer-text {
		font-size: 1.25rem;
		color: rgb(125, 125, 125);
	}
</style>
<footer>
	<div class="footer-text">
		Copyright &copy; 2022 Andrew Peng &bull; All rights reserverd
	</div>
</footer>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", FooterComponent);
