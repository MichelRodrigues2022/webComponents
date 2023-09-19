class tituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
    
        //passos: criar a base do componente
        const componenteRoot = document.createElement("h1");
        componenteRoot.textContent = "Minha noticia";
        //estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }
        `;
        //enviar para a shadow
        shadow.appendChild(componenteRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", tituloDinamico);