<script>
  import { onMount } from "svelte";
  export let date;
  export let random;

  onMount(async () => {
    const res = await fetch("/api/random");
    const newRandom = await res.text();    
    date = newRandom;
    random = newRandom;
  });
</script>

<main>
  <h1>Svelte + Node.js + Gløer API</h1>
  <h2>
    Deployed with
    <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
      Vercel
    </a>
    !
  </h2>
  <h3>The random number is: {random ? random : "Loading random number"}</h3>
  <p>
    <a
      href="https://github.com/vercel/vercel/tree/main/examples/svelte"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    function. See
    <a href="/api/date">
      <code>api/date</code>
      for the Date API with Node.js
    </a>
    .
  </p>
  <br />
  <h2>The date according to Node.js is:</h2>
  <p>{date ? date : 'Loading date...'}</p>
</main>
