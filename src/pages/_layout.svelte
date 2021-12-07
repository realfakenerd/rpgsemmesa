<script>
  import Nav from "../components/Nav.svelte";
</script>

<header>
  <Nav />
</header>

<main class="p-10">
  <!-- routify:options preload="proximity" -->
  <slot />
</main>
