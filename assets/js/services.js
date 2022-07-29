import view from "./view.js";

export default class extends view {
    constructor() {
        super();
        this.setTitle("Services");
    }

    async getHTML() {
        return `
        <section id="service">
        <div class="container">
            <h1 class="sub-title">
                Services
            </h1>
            <div class="services-list">
                <div>
                    <i class="fa-solid fa-code"></i>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, a necessitatibus expedita tempore placeat consequuntur fuga corrupti eaque ipsam excepturi! Provident accusantium rem perspiciatis dolore quisquam aperiam deleniti illo labore!</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="fa-solid fa-crop"></i>
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, a necessitatibus expedita tempore placeat consequuntur fuga corrupti eaque ipsam excepturi! Provident accusantium rem perspiciatis dolore quisquam aperiam deleniti illo labore!</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="fa-solid fa-server"></i>
                    <h2>API Design</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, a necessitatibus expedita tempore placeat consequuntur fuga corrupti eaque ipsam excepturi! Provident accusantium rem perspiciatis dolore quisquam aperiam deleniti illo labore!</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}