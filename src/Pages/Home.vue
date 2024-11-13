<template>
    <h2>CAPÍTULOS RICK Y MORTY</h2>
    <div class="capitulos">
        <Splide class="splide"
            :options="{ 
                perPage: 4,
                pagination: false,
                arrows: true,
                gap: '1rem',
            }" 
            aria-label="CAPÍTULOS">
            <SplideSlide v-for="(episodio, index) in data" :key="index">
                <router-link :to="{ name: 'PersonajesCapitulo', params: { id: episodio.id } }">
                    <p>Capítulo {{ episodio.id }}</p>
                    <h3>{{ episodio.name }}</h3>
                </router-link>
            </SplideSlide>
        </Splide>
    </div>
</template>
  
<script>
    import '../assets/scss/capitulosComponent.scss';
    import { ref, onMounted } from 'vue';
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';

    export default {
        components: {
            Splide,
            SplideSlide,
        },
    setup() {
    const data = ref([]);

    const fetchEpisodes = async () => {
        try {
            const BASE_URL = 'https://rickandmortyapi.com/api/episode';
            const response = await fetch(BASE_URL);
            const jsonData = await response.json();
            data.value = jsonData.results;
        } catch (error) {
            console.error(error);
        }
    };

    onMounted(fetchEpisodes);

        return {
            data,
        };
        },
    };
</script>