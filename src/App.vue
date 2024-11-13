<template>
  <header>
    <div class="logo">
      RICKY MORTY
    </div>
  </header>
  <main>
    <RouterView />
  </main>

  <footer>
    <div>
      FOOTER
    </div>
  </footer>
</template>

<style scoped>
header {
  background-color: #1e3d58;
  width: 100%;
  height: 5em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-out;
}

.logo {
  font-weight: bold;
  color: #f39c12;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

footer {
  background-color: #1e3d58;
  width: 100%;
  height: 5em;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

main {
  padding-top: 6em;
  padding-bottom: 6em;
  background-color: #f4f6f9;
  color: #333;
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
}

@media (max-width: 768px) {
  header, footer {
    height: 4em;
    font-size: 1.5rem;
  }

  main {
    padding-top: 5em;
    padding-bottom: 5em;
  }
}
</style>
