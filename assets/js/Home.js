import view from "./view.js";

export default class extends view {
    constructor() {
        super();
        this.setTitle("Portfolio");
    }

    async getHTML() {
        return `
        <section id="header">
        <header>
            <div class="container">
                <div class="header-text">
                    <p>Software Developer</p>
                    <h1>Hii I am <span>Rishi</span> <br> From India.</h1>
                </div>
            </div>
        </header>
        </section>
        `;
    }
}