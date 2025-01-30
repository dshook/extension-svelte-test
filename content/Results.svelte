<script lang="ts">
  import { countState } from "./sharedState.svelte";

  let message = "Welcome to your Svelte Extension.";
</script>

<header>
  <h1>
    <br />
    {message}
  </h1>
  <button onclick={() => countState.count++}
    >Hi, I've been clicked {countState.count}</button
  >
</header>

<style>
  h1 {
    font-weight: bold;
  }
</style>
