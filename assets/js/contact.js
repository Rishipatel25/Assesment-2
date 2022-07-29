import view from "./view.js";

export default class extends view {
    constructor() {
        super();
        this.setTitle("Contact Me");
    }

    async getHTML() {
        return `
        <section id="contact">
        <div class="container">
            <h1 class="sub-title">
                Contact Me
            </h1>
            <div class="margin-top-50 row">
                <div class="col-4 conatct-details">
                    <div>
                        <i class="fa-solid fa-paper-plane"></i> <span class="font-size-20 email">rishi.patel@globalvoxinc.com</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone"></i> <span class="font-size-20 mobile-number">9173165257</span>
                    </div>
                    <div class="social-links">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>

                </div>
                <div class="col-8">
                    <form class="d-flex flex-column gap-3">
                        <input type="text" name="user-name" id="user-name" placeholder="Your name" required>
                        <input type="email" name="user-email" id="user-email" placeholder="Your Email" required>
                        <textarea name="user-message" id="user-message" cols="10" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit" class="send-btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}