<script>
export default {
    props: {
        image: String,
        name: String,
        type: String, 
        technology: String,
        description: String,
        date: Date,
        github_link: String
    },

};
</script>

<template>
    <div class="card text-center" style="width: 18rem;">
        <img :src="image" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <span class="badge text-bg-secondary mx-2">{{type}}<span class="badge text-bg-info">{{technology}}</span></span>
            <p class="card-text">{{description}}</p>
            <p class="card-subtitle mb-2 text-body-secondary">{{date}}</p>
            <a class="card-link" :href="`${github_link}`">GitHub Link</a>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>