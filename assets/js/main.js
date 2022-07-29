// Imports
import about from "./about.js";
import Home from "./Home.js";
import services from "./services.js";
import contact from "./contact.js";
import portfolio from "./portfolio.js";


(function () {

    /**
     * 
     * @param {string} url This will take url 
     */
    const navigateTo = url => {
        history.pushState(null, null, url);
        ROUTER();
    }


    /**
     * Add Routers here  
     */
    const ROUTER = async () => {
        const routes = [
            {
                path: "/index.html",
                view: Home,
            },
            {
                path: "/index.html/about",
                view: about,
            },
            {
                path: "/index.html/services",
                view: services,
            },
            {
                path: "/index.html/portfolio",
                view: portfolio,
            },
            {
                path: "/index.html/contact",
                view: contact,
            },
        ]

        const potentialMatches = routes.map((route) => {
            return {
                route: route,
                isMatch: location.pathname === route.path,
            }
        })
        
        let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
        
        if (!match) {
            match = {
                route: routes[0],
                isMatch: true,
            }
        }
        const view = new match.route.view();
        document.querySelector('#app').innerHTML = await view.getHTML();
    }

    window.addEventListener("popstate", (e) => {
        navigateTo(e.target.href);
    })

    document.addEventListener('DOMContentLoaded', () => {
        document.body.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault()
                navigateTo(e.target.href);
            }
        })
        ROUTER();
    })


})()