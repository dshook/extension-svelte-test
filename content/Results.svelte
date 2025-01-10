<script lang="ts">
  let message = "Welcome to your Svelte Extension.";

  let count = $state(0);
</script>

<header>
  <h1>
    <br />
    {message}
  </h1>
  <button onclick={() => count++}>Hi, I've been clicked {count}</button>
</header>
