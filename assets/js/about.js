import view from "./view.js";

export default class extends view {
    constructor() {
        super();
        this.setTitle("About");
    }

    async getHTML() {
        return `
        <section id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="../assets/images/user.png" alt="UserImage">
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">
                        About Me
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at magnam omnis porro mollitia aperiam veritatis unde, illo autem perferendis pariatur amet, placeat magni ipsa dolore labore. Sequi, beatae! Vel.
                        Atque omnis nisi quisquam molestiae doloremque voluptas distinctio, rerum maiores iure cum inventore natus necessitatibus corporis mollitia cumque a nihil. A facilis suscipit fugit ratione cumque, vitae quibusdam voluptas illo.
                        Dicta, architecto? Modi culpa aperiam, deserunt quisquam, dolorum inventore quod beatae laudantium, quam necessitatibus repellat ut? Consequatur ullam odit, libero eum, eligendi officiis harum cupiditate temporibus accusamus, expedita eius dignissimos.
                    </p>
                    <div class="tab-titles d-flex">
                        <p class="tab-links active-link" id="active-skills">Skills</p>
                        <p class="tab-links" id="active-experience">Experience</p>
                        <p class="tab-links" id="active-education">Education</p>
                    </div>
                    <div class="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>UI/UX</span> <br> Designing Web/App interface</li>
                            <li><span>Web Development</span> <br>Web app Development</li>
                            <li><span>Api Development</span> <br>Rest-Full Apis development</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="experience">
                        <ul>
                            <li><span>2021 - 2022</span> <br>Globalvox Associate Software Developer</li>
                            <li><span>2020 - 2021</span> <br>Freelancer in Wordpress</li>
                            <li><span>2019 - 2020</span> <br>Fiver</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="education">
                        <ul>
                            <li><span>2019</span> <br> MCA from GLS </li>
                            <li><span>2016</span> <br>BCA from LJ</li>
                            <li><span>2014</span> <br>12th from SSIS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}