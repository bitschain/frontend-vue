<template>
    <h1>{{ text }} = {{ m1 }}</h1>
    <button @click="m2()">{{ text }}</button>
</template>

<script>

export default {
    name: 'CustomButton',

    props: {
        text: String,
    },

    mounted() {
        console.log("Vue");
    },

    methods: {
        m2() {
            console.log("Hello");
        }
    },

    computed: {
        m1() {
            return 2;
        }
    }
}
</script>

<style scoped>

</style>
