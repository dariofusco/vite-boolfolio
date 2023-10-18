<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
    name: "Index",

    components: {
        ProjectCard,
    },

    data() {
        return {
            projects: [],
        };
    },
    
    methods: {

        fetchData() {
            axios
                .get("http://127.0.0.1:8000/api/projects")
                .then((response) => {
                    this.projects = response.data.results;
                });
        },

        getImageUrl(project) {
            return `http://127.0.0.1:8000/storage/${project.image}`;
        },

        getDateFormat(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
        }

    },

    mounted() {
        this.fetchData();
    },
};
</script>

<template>
    <div class="container vh-100">
        <div class="row">
            <h1 class="py-3">I Miei Progetti</h1>
            <div class="col-3" v-for="project in projects">
                <ProjectCard :image="getImageUrl(project)" :name="project.name" :type="project.type.name"
                    :technologies="project.technologies" :description="project.description"
                    :date="getDateFormat(project.date)" :github_link="project.github_link" :id="project.id">
                </ProjectCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>