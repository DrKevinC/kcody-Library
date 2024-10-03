<template>
    <pre>{{  jsonData }}</pre>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const jsonData = ref(null);
const thisError = ref(null);

async function getAllBookAPI(){
    try {
        const response = await axios.get("https://getallbooks-3y55czmnpq-uc.a.run.app");// something here soon//);
        jsonData.value = response.data;
        thisError.value = null;
    } catch (error) {
        console.error('Error fetching all books API: ', error);
        thisError.value = error;
        jsonData.value = null;
    }
}

onMounted(() => {
    getAllBookAPI()
})
</script>