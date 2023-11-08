<script>
  import Map from '../lib/Map.svelte';
  export let data;
  let arrivals = data.RailArrivals;
</script>

<h1>MARTA Arrivals</h1>
<div id="container">
  <div>
    {#each arrivals as arrival}
      <div class="arrs {arrival.LINE}">
        <p>Destination: {arrival.DESTINATION}</p>
        <p>Direction: {arrival.DIRECTION}</p>
        <p>Event Time: {arrival.EVENT_TIME}</p>
        <p>Head Sign:{arrival.HEAD_SIGN}</p>
        <p>Line: {arrival.LINE}</p>
        <p>Next Arrival: {arrival.NEXT_ARR}</p>
        <p>Station: {arrival.STATION}</p>
        <p>TrainID: {arrival.TRAIN_ID}</p>
        <p>Waiting: {arrival.WAITING_SECONDS}</p>
        <p>WaitingTime: {arrival.WAITING_TIME}</p>
        <p>Response timestamp: {arrival.RESPONSETIMESTAMP}</p>
        <p>X: {arrival.VEHICLELONGITUDE}</p>
        <p>Y: {arrival.VEHICLELATITUDE}</p>
        <p>Delay: {arrival.DELAY}</p>
        <p>TripID: {arrival.TRIP_ID}</p>
      </div>
      <br />
    {/each}
  </div>
  <div>
    <Map />
  </div>
</div>

<style>
  #container {
    display: flex;
    justify-content: space-between;
  }
  #map {
    height: 40svw;
    width: 50svw;
  }
  .arrs {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
  }

  p {
    margin: 0;
  }

  .BLUE {
    background-color: blue;
    color: white;
  }

  .GREEN {
    background-color: green;
    color: white;
  }

  .GOLD {
    background-color: gold;
  }

  .RED {
    background-color: red;
    color: white;
  }
</style>
