// import Home from "../../views/Home.js";

(function () {
    // Constants
    const skills = document.getElementById("active-skills");
    const experience = document.getElementById("active-experience");
    const education = document.getElementById("active-education");
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");
    const sections = document.getElementsByTagName('section');
    const aboutMe = document.getElementById('about');
    const service = document.getElementById('service');
    const portfolio = document.getElementById('portfolio');
    const contact = document.getElementById('contact');
    const aboutLink = document.getElementById('about-link');
    const servicesLink = document.getElementById('services-link');
    const portfolioLink = document.getElementById('portfolio-link');
    const contactLink = document.getElementById('contact-link');
    const header = document.getElementById('header');
    const home = document.getElementById('home-link');


    // AddEventListener
    skills.addEventListener('click', activeSkills);
    experience.addEventListener('click', activeExperience);
    education.addEventListener('click', activeEducation);
    aboutLink.addEventListener('click',(event)=>{
        event.preventDefault()
        resetSection();
        aboutMe.style.display = "block";
    })
    servicesLink.addEventListener('click', (event)=>{
        event.preventDefault()
        resetSection();
        service.style.display = "block";
    })
    portfolioLink.addEventListener('click', (event)=>{
        event.preventDefault()
        resetSection();
        portfolio.style.display = "block";
    })
    contactLink.addEventListener('click', (event)=>{
        event.preventDefault()
        resetSection();
        contact.style.display = "block";
    })
    home.addEventListener('click', (event)=>{
        event.preventDefault()
        resetSection();
        header.style.display = "block";
    })

    function activeSkills(){
        openTab()
        event.currentTarget.classList.add("active-link");
        document.getElementById("skills").classList.add("active-tab");
    }
    function activeExperience(){
        openTab()
        event.currentTarget.classList.add("active-link");
        document.getElementById("experience").classList.add("active-tab");
    }
    function activeEducation(){
        openTab()
        event.currentTarget.classList.add("active-link");
        document.getElementById("education").classList.add("active-tab");
    }

    /**
     * This Function will remove active links
     * 
     */
    function openTab() {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
    }

    
    function resetSection() {
        for (const section of sections) {
            console.log(section);
            section.style.display = "none"
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        resetSection();
        header.style.display= "block";
    })

    // /**
    //  * 
    //  * @param {string} url This will take url 
    //  */
    // const navigateTo = url => {
    //     history.pushState(null, null, url);
    //     ROUTER();
    // }


    // const ROUTER = async () => {
    //     const routes = [
    //         {
    //             path: "/index.html",
    //             view: Home,
    //         },
    //         {
    //             path: "/index.html/about",
    //             view: ()=>{ console.log("about");},
    //         },
    //         {
    //             path: "/index.html/services",
    //             view: ()=>{ console.log("services");},
    //         },
    //         {
    //             path: "/index.html/portfolio",
    //             view: ()=>{ console.log("portfolio");},
    //         },
    //         {
    //             path: "/index.html/contact",
    //             view: ()=>{ console.log("contact");},
    //         },
    //     ]
    //     const potentialMatches = routes.map((route) => {
    //         return {
    //             route: route,
    //             isMatch: location.pathname === route.path,
    //         }
    //     })
    //     console.log(potentialMatches);
    //     let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
    //     if (!match) {
    //         match = {
    //             route: routes[0],
    //             isMatch: true,
    //         }
    //     }
    //     const view = new match.route.view();
    //     document.querySelector('#app').innerHTML = await view.getHTML();
    // }

    // window.addEventListener("popstate", (e) => {
    //     console.log(e);
    //     navigateTo(e.target.href);
    // })

    // document.addEventListener('DOMContentLoaded', () => {
    //     document.body.addEventListener("click", e => {
    //         if (e.target.matches("[data-link]")) {
    //             e.preventDefault()
    //             navigateTo(e.target.href);
    //         }
    //     })
    //     ROUTER();
    // })












    // /**
    //  * 
    //  * @param {object} list Sets List of users in LocalStorage 
    //  */
    // function setTodoItems(list) {
    //     localStorage.setItem("keyname", JSON.stringify(list))
    // }
    
    // /**
    //  * 
    //  * @returns Get LocalStorage item
    //  */
    // function getTodoItems() {
    //     return JSON.parse(localStorage.getItem("todoList"));
    // }
    
    













})()