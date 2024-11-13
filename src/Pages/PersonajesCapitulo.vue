<template>
    <h2>Personajes del Capítulo {{ id }}</h2>
    <div class="personajes">
        <div v-if="personajes.length">
        <div v-for="(personaje, index) in personajes" :key="index">
            <router-link :to="{ name: 'Personaje', params: { id: personaje.id } }">
                <p>{{ personaje.name }}</p>
                <img :src="personaje.image" :alt="personaje.name" />
            </router-link>
        </div>
        </div>
        <div v-else>
        <p>Cargando personajes...</p>
        </div>
    </div>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = route.params.id;
    
    const personajes = ref([]);
    const fetchCharacters = async () => {
    try {
        const BASE_URL = `https://rickandmortyapi.com/api/episode/${id}`;
        const response = await fetch(BASE_URL);
        const episodeData = await response.json();
    
        const characterUrls = episodeData.characters;
    
        const characters = await Promise.all(
            characterUrls.map(async (url) => {
                const res = await fetch(url);
                return await res.json();
            })
        );
    
        personajes.value = characters;
    } catch (error) {
        console.error(error);
    }
    };

    onMounted(fetchCharacters);
</script>