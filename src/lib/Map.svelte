<script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  let map;
  let mapElement;

  onMount(() => {
    map = L.map(mapElement);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
  });

  onDestroy(() => {
    map?.remove();
    map = undefined;
  });
</script>

<div bind:this={mapElement}>
  {#if map}
    <slot />
  {/if}
</div>
