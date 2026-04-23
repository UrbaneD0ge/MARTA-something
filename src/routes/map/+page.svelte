<script>
  import { onMount } from 'svelte';
  export let data;
  let arrivals = data.data;

  onMount(async () => {
    console.log(arrivals);
      // import RouteLayer module to load a RouteLayer from a portal item
      const RouteLayer = (await import("@arcgis/core/layers/RouteLayer.js")).default;
      // import config to set the API key
      const config = await import("@arcgis/core/config.js");



  });
</script>

<arcgis-map item-id="b90baef48a2a4328bf123eb5d9f29f22" style="height: 100vh; width: 100vw;">
  <arcgis-zoom slot="top-left"></arcgis-zoom>
</arcgis-map>

