var canvas = document.getElementById("myChart");
console.log(canvas);
var ctx = canvas.getContext("2d");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "STUDENTS",
        data: [1, 2],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  },
});
