<script>
import axios from "axios";

export default {

    data() {
        return {
            formData: {
                name: "",
                email: "",
                message: ""
            },
            errors: null,
            success: null,
            loading: false,
        };
    },

    methods: {
        onFormSubmit() {

            const dataToSend = new FormData();
            dataToSend.append("name", this.formData.name);
            dataToSend.append("email", this.formData.email);
            dataToSend.append("message", this.formData.message);

            axios
                .post("http://127.0.0.1:8000/api/contacts", dataToSend)
                .then((resp) => {
                    this.success = resp.data.message;

                    this.errors = null;
                })
                .catch((e) => {
                    this.errors = e.response?.data?.message ?? e.message;
                });
        },
    }
}

</script>

<template>
    <div class="container vh-100">

        <h1>Come contattarmi</h1>

        <div class="alert alert-danger" v-if="errors">{{ errors }}</div>

        <form @submit.prevent="onFormSubmit" v-if="!success">

            <div class="mb-3">
                <label>Nome</label>
                <input type="text" class="form-control" v-model="formData.name" />
            </div>

            <div class="mb-3">
                <label>Email</label>
                <input type="text" class="form-control" v-model="formData.email" />
            </div>

            <div class="mb-3">
                <label>Messaggio</label>
                <textarea class="form-control" v-model="formData.message"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Invia</button>

        </form>

        <div class="alert alert-success" v-else>{{ this.success }}</div>

    </div>
</template>

<style lang="scss" scoped></style>