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
                    this.project = response.data.results;
                });
        },

        getImageUrl(project) {
            //Solo se project.image esiste
            if (project.image) {
                return `http://127.0.0.1:8000/storage/${project.image}`;
            }
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
    <div class="container py-3 text-center vh-100">

        <h1>{{ project.name }}</h1>

        <h2>
            <!--Effettuo un controllo in modo da visualizzare i risultati solo quando sono disponibili, altrimenti ottengo un errore-->
            <span class="badge text-bg-secondary">{{ project.type ? project.type.name : '' }}

                <span class="badge text-bg-info" v-for="technology in project.technologies">{{ technology.name }}</span>

            </span>
        </h2>

        <p>{{ project.description }}</p>
        <!--Effettuo un controllo in modo da visualizzare i risultati solo quando sono disponibili, altrimenti ottengo un errore-->
        <p>{{ project.date ? getDateFormat(project.date) : '' }}</p>

        <div>
            <!--In questo caso il controllo lo faccio direttamente nella funzione nei methods-->
            <img :src="getImageUrl(project)" alt="" class="img-fluid" style="width: 250px">
        </div>

        <a :href="`${project.github_link}`">GitHub Link</a>

    </div>
</template>

<style lang="scss" scoped></style>