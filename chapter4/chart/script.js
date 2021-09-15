let pieData = {
  labels: ["Webデザイナー", "Webデベロッパー"],
  series: [14, 6]
};

let pieOptions = {
  width: "100%",
  height: "440px"
};

new Chartist.Pie(".pie-chart", pieData, pieOptions);


let barData = {
  labels: ["2018年", "2019年", "2020年"],
  series: [[10, 16, 29]]
};

let barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpace: 50,
    labelInterpolationFnc: function(value) {
      return value + "人"
    }
  },
  width: "100%",
  height: "400px"
}

new Chartist.Bar(".bar-chart", barData, barOptions);