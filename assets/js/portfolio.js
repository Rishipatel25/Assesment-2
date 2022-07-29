import view from "./view.js";

export default class extends view {
    constructor() {
        super();
        this.setTitle("Portfolio");
    }

    async getHTML() {
        return `
        <section id="portfolio">
        <div class="container">
            <h1 class="sub-title">
                My Work
            </h1>
            <div class="d-flex justify-content-between margin-top-50">
                <div class="work d-flex flex-column justify-content-between">
                    <div class="work-img">
                        <img src="../assets/images/work-1.png" alt="work-1">
                    </div>
                    <div class="work-content">
                        <h3 class="project-title">Bubble Game</h3>
                        <p class="project-desc">This game will improve your typing speed. As you play the level will keep getting difficult</p>
                        <div class="project-links">
                            <a href="#" class="project-github">Github</a>
                            <a href="#" class="project-visit-site">Visit Site</a>
                        </div>
                    </div>
                </div>
                <div class="work d-flex flex-column justify-content-between">
                    <div class="work-img">
                        <img src="../assets/images/work-2.png" alt="work-1">
                    </div>
                    <div class="work-content">
                        <h3 class="project-title">Lexeon</h3>
                        <p class="project-desc">Chaining project where you can reffer and earn.</p>
                        <div class="project-links">
                            <a href="#" class="project-github">Github</a>
                            <a href="#" class="project-visit-site">Visit Site</a>
                        </div>
                    </div>
                </div>
                <div class="work d-flex flex-column justify-content-between">
                    <div class="work-img">
                        <img src="../assets/images/work-3.png" alt="work-1">
                    </div>
                    <div class="work-content">
                        <h3 class="project-title">Canvas Crop Image</h3>
                        <p class="project-desc">You can upload image to canvas and crop it as you like then you also have download</p>
                        <div class="project-links">
                            <a href="#" class="project-github">Github</a>
                            <a href="#" class="project-visit-site">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}