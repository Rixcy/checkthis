<template>
  <main-content>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-grey-lightest border-b-4 border-grey-dark rounded-lg shadow-lg p-5">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded-full p-5 bg-grey-dark"><i class="fa fa-wallet fa-2x fa-inverse"/></div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="uppercase text-grey-dark">Total Revenue</h5>
              <h3 class="text-3xl">$3249 <span class="text-grey"><i class="fas fa-caret-up"/></span></h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-grey-lightest border-b-4 border-grey-dark rounded-lg shadow-lg p-5">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded-full p-5 bg-grey-dark"><i class="fas fa-user-plus fa-2x fa-inverse"/></div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="uppercase text-grey-dark">New Users</h5>
              <h3 class="text-3xl">2 <span class="text-grey-dark"><i class="fas fa-caret-up"/></span></h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-grey-lightest border-b-4 border-grey rounded-lg shadow-lg p-5">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded-full p-5 bg-grey-dark"><i class="fas fa-tasks fa-2x fa-inverse"/></div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="uppercase text-grey-dark">To Do List</h5>
              <h3 class="text-3xl">7 tasks</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-blue-lightest border-b-4 border-blue rounded-lg shadow-lg p-5">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded-full p-5 bg-blue-dark"><i class="fas fa-server fa-2x fa-inverse"/></div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="uppercase text-grey-dark">Server Uptime</h5>
              <h3 class="text-3xl">152 days</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-blue-lightest border-b-4 border-blue rounded-lg shadow-lg p-5">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded-full p-5 bg-blue-dark"><i class="fas fa-users fa-2x fa-inverse"/></div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="uppercase text-blue-dark">Total Users</h5>
              <h3 class="text-3xl">249 <span class="text-blue"><i class="fas fa-exchange-alt"/></span></h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-blue-lightest border-b-4 border-blue rounded-lg shadow-lg p-5">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
              <div class="rounded-full p-5 bg-blue-dark"><i class="fas fa-inbox fa-2x fa-inverse"/></div>
            </div>
            <div class="flex-1 text-right md:text-center">
              <h5 class="uppercase text-grey-dark">Issues</h5>
              <h3 class="text-3xl">3 <span class="text-blue"><i class="fas fa-caret-up"/></span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row flex-wrap flex-grow mt-2">
      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-grey-light uppercase text-grey-darkest border-b-2 border-grey rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="uppercase text-grey-dark">Graph</h5>
          </div>
          <div class="p-5">
            <canvas
              id="chartjs-7"
              class="chartjs"
              width="undefined"
              height="undefined"/>
            <script>
              new Chart(document.getElementById("chartjs-7"), {
              "type": "bar",
              "data": {
              "labels": ["January", "February", "March", "April"],
              "datasets": [{
              "label": "Page Impressions",
              "data": [10, 20, 30, 40],
              "borderColor": "rgb(255, 99, 132)",
              "backgroundColor": "rgba(255, 99, 132, 0.2)"
              }, {
              "label": "Adsense Clicks",
              "data": [5, 15, 10, 30],
              "type": "line",
              "fill": false,
              "borderColor": "rgb(54, 162, 235)"
              }]
              },
              "options": {
              "scales": {
              "yAxes": [{
              "ticks": {
              "beginAtZero": true
              }
              }]
              }
              }
              });
            </script>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-grey-light border-b-2 border-grey rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="uppercase text-grey-dark">Graph</h5>
          </div>
          <div class="p-5">
            <canvas
              id="chartjs-0"
              class="chartjs"
              width="undefined"
              height="undefined"/>
            <script>
              new Chart(document.getElementById("chartjs-0"), {
              "type": "line",
              "data": {
              "labels": ["January", "February", "March", "April", "May", "June", "July"],
              "datasets": [{
              "label": "Views",
              "data": [65, 59, 80, 81, 56, 55, 40],
              "fill": false,
              "borderColor": "rgb(75, 192, 192)",
              "lineTension": 0.1
              }]
              },
              "options": {}
              });
            </script>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-grey-light border-b-2 border-grey rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="uppercase text-grey-dark">Graph</h5>
          </div>
          <div class="p-5">
            <canvas
              id="chartjs-1"
              class="chartjs"
              width="undefined"
              height="undefined"/>
            <script>
              new Chart(document.getElementById("chartjs-1"), {
              "type": "bar",
              "data": {
              "labels": ["January", "February", "March", "April", "May", "June", "July"],
              "datasets": [{
              "label": "Likes",
              "data": [65, 59, 80, 81, 56, 55, 40],
              "fill": false,
              "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
              "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
              "borderWidth": 1
              }]
              },
              "options": {
              "scales": {
              "yAxes": [{
              "ticks": {
              "beginAtZero": true
              }
              }]
              }
              }
              });
            </script>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-grey-light border-b-2 border-grey rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="uppercase text-grey-dark">Graph</h5>
          </div>
          <div class="p-5"><canvas
            id="chartjs-4"
            class="chartjs"
            width="undefined"
            height="undefined"/>
            <script>
              new Chart(document.getElementById("chartjs-4"), {
              "type": "doughnut",
              "data": {
              "labels": ["P1", "P2", "P3"],
              "datasets": [{
              "label": "Issues",
              "data": [300, 50, 100],
              "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
              }]
              }
              });
            </script>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-grey-light border-b-2 border-grey rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="uppercase text-grey-dark">Table</h5>
          </div>
          <div class="p-5">
            <table class="w-full p-5 text-grey-darker">
              <thead>
                <tr>
                  <th class="text-left text-blue-darkest">Name</th>
                  <th class="text-left text-blue-darkest">Side</th>
                  <th class="text-left text-blue-darkest">Role</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Obi Wan Kenobi</td>
                  <td>Light</td>
                  <td>Jedi</td>
                </tr>
                <tr>
                  <td>Greedo</td>
                  <td>South</td>
                  <td>Scumbag</td>
                </tr>
                <tr>
                  <td>Darth Vader</td>
                  <td>Dark</td>
                  <td>Sith</td>
                </tr>
              </tbody>
            </table>
            <p class="py-2"><a href="#">See More issues...</a></p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <div class="bg-white border-transparent rounded-lg shadow-lg">
          <div class="bg-grey-light border-b-2 border-grey rounded-tl-lg rounded-tr-lg p-2">
            <h5 class="uppercase text-grey-dark">Template</h5>
          </div>
          <div class="p-5">
            <h3 class="font-semibold text-xl mb-4">Switches</h3>
            <div class="flex justify-around">
              <span class="border rounded-full border-grey flex items-center cursor-pointer w-12 bg-blue justify-end">
                <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"/>
              </span>
              <span class="border rounded-full border-grey flex items-center cursor-pointer w-12 justify-start">
                <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"/>
              </span>
            </div>
            <br>
            <h3 class="font-semibold text-xl mb-4">Calendar</h3>
            <div class="flex justify-center">
              <div class="block rounded-t overflow-hidden bg-white text-center w-24">
                <div class="bg-blue text-white py-1">
                  August
                </div>
                <div class="pt-1 pb-4 px-2 border-l border-r border-b rounded-b">
                  <span class="text-4xl font-bold">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-content>
</template>
