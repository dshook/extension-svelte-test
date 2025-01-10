<script lang="ts">
  let message = "Welcome to your Svelte Extension.";

  let count = $state(0);
</script>

<header>
  <h1>
    <img class="svelte" src="/logo.png" alt="The Svelte logo" width="120px" />
    <br />
    {message}
  </h1>
  <button onclick={() => count++}>Hi, I've been clicked {count}</button>
  <p>
    Learn more about browser extensions at
    <a href="https://extension.js.org" target="_blank">
      https://extension.js.org
    </a>.
  </p>
</header>
