import { createRouter, createWebHistory } from "vue-router";

// importo componenti singole pagine
import HomePage from "./pages/Home.vue";
import ProjectsIndexPage from "./pages/Index.vue";
import ProjectsShowPage from "./pages/Show.vue";

// definisco le rotte
const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },

    {
        path: "/projects",
        name: "projects.index",
        component: ProjectsIndexPage
    },

    {
        // Show di un singolo post
        path: "/projects/:id",
        name: "projects.show",
        component: ProjectsShowPage
    }
]

// creo istanza di Router
const router = createRouter({

    history: createWebHistory(),
    // passo l'array delle rotte
    routes
});

// esporto l'istanta router per poterla usare dentro main.js
export { router };