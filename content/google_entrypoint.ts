import { mount } from "svelte";
import Results from "./Results.svelte";

function run() {
  console.log("Mounting svelte component");

  const resultsContainer = document.querySelector("#rcnt");

  if (!resultsContainer) {
    console.log("No Results container");
    return;
  }

  const app = mount(Results, {
    target: resultsContainer,
  });
}

run();
