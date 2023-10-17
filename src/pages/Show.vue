<script>
import axios from "axios";

export default {
    name: "Show",

    data() {
        return {
            project: {},
        };
    },
    methods: {

        fetchData() {
            axios
                .get("http://127.0.0.1:8000/api/projects/" + this.$route.params.id)
                .then((response) => {
                    //this.project = response.data.results;
                    console.log(response);
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
    <div class="container py-3 text-center">

        <h1>{{ project.name }}</h1>

        <h2>
            <span class="badge text-bg-secondary">{{ project.type ? project.type.name:'' }}

                <span class="badge text-bg-info">{{ technology.name }}</span>

            </span>
        </h2>

        <p>{{ project.description }}</p>

        <p>{{ getDateFormat(project.date) }}</p>

        <div>
            <img :src="getImageUrl(project)" alt="" class="img-fluid" style="width: 250px">
        </div>

        <a :href="`${project.github_link}`">GitHub Link</a>

    </div>
</template>

<style lang="scss" scoped></style>