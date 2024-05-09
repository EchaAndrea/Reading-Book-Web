class HeadApp extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        body {
          background-color: rgb(233, 231, 207);
        }
        
        h1 {
          color: #000000;  
        }
        
        header {
          max-width: 600px;
          margin: auto;
          text-align: center;
        }    
      </style>

      <header>
        <h1>Reading Books</h1>
        <p>
        Reading Books is a website where you can do search for the book you 
        want to read via a search engine by typing in keywords in the form 
        of information such as title, author and publication date of the book.
        </p>
      </header>
      `;
  }
}

customElements.define("head-app", HeadApp);
