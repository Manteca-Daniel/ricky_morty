<template>
    <div class="container-personaje">
        <div v-if="personaje">
            <img :src="personaje.img" :alt="personaje.name" class="personaje-img">
            <h2>{{ personaje.name }}</h2>
            <p><strong>Status:</strong> {{ personaje.status }}</p>
            <p><strong>Species:</strong> {{ personaje.species }}</p>
            <p><strong>Type:</strong> {{ personaje.type }}</p>
            <p><strong>Gender:</strong> {{ personaje.gender }}</p>
            <p><strong>Origin:</strong> {{ personaje.origin }}</p>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import '../assets/scss/Personaje.scss';

    const route = useRoute();
    const id = route.params.id;
    const personaje = ref(null);

    const fetchCharacter = async () => {
        try {
            const BASE_URL = `https://rickandmortyapi.com/api/character/${id}`;
            const response = await fetch(BASE_URL);
            const characterData = await response.json();

            personaje.value = {
                id: characterData.id,
                name: characterData.name,
                status: characterData.status,
                species: characterData.species,
                type: characterData.type ? characterData.type : "UNDEFINED",
                gender: characterData.gender,
                origin: characterData.origin.name,
                img: characterData.image,
            };
        } catch (error) {
            console.error('Error fetching character:', error);
        }
    };

    onMounted(() => {
        fetchCharacter();
    });
</script>