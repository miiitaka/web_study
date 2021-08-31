let pieData = {
  labels: ["Webデザイナー", "Webデベロッパー"],
  series: [14, 6]
};

let pieOptions = {
  width: "100%",
  height: "440px"
};

new Chartist.Pie(".pie-chart", pieData, pieOptions);