const toNumber = (arrOfStr) => {
  let arrOfNum = arrOfStr.map((str) => {
    return Number(str);
  });
  return arrOfNum;
};

const createLabels = (n) => {
  labelArr = [];
  for (let i = 1; i <= n; i++) {
    labelArr.push(i);
  }
  return labelArr;
};

const getMaxLength = () => {
  return Math.max(math.length, compsci.length, russian.length);
};

let math = toNumber(get("math"));
let compsci = toNumber(get("compsci"));
let russian = toNumber(get("russian"));
let ctx = document.getElementById("chart-canvas");

let progress_chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: createLabels(getMaxLength()),
    datasets: [
      {
        data: math,
        label: "Math",
        borderColor: "#3e95cd",
        fill: false,
      },
      {
        data: compsci,
        label: "Computer Science",
        borderColor: "#ff0000",
        fill: false,
      },
      {
        data: russian,
        label: "Russian",
        borderColor: "#ffff00",
        fill: false,
      },
    ],
  },
});
