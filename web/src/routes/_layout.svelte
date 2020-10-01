<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

</script>

<style>
main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 128px repeat(5, auto);
  grid-column-gap: 8px;
  grid-row-gap: 0px;
  margin: 0 1rem;
}

main::before {
  content: '';
  width: 1px;
  background-color: var(--primary-dark);
  height: 120vh;
  position: fixed;
  left: 64px;
  z-index: -1;
}

@media screen and (min-width: 1048px) {
  main {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: 128px repeat(5, auto);
      grid-column-gap: 16px;
      margin: 0 auto;
      max-width: 1440px;
    }

  main::before {
    left: 20%;
  }
}

</style>

<main>
  <Header />
  <slot></slot>
  <Footer />
</main>
