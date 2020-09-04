import * as d3 from "d3";

const MARGIN = { TOP: 10, BOTTOM: 80, LEFT: 70, RIGHT: 10 };
const WIDTH = 500 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 300 - MARGIN.TOP - MARGIN.BOTTOM;

class D3Chart {
  constructor(element, data) {
    let vis = this;

    //vis.datos = data;

    vis.g = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

	//SCALES:
    vis.x = d3.scaleLinear()
      .range([0, WIDTH]);

    vis.y = d3.scaleLinear()
	  .range([HEIGHT, 0]);

	//AXIS:
	vis.xAxisGroup = vis.g.append("g")
		.attr("transform", `translate(0, ${HEIGHT})`);
	vis.yAxisGroup = vis.g.append("g");

	//LABELS:
	vis.g.append("text")
		.attr("x", WIDTH / 2)
		.attr("y", HEIGHT + 40)
		.attr("font-size", 20)
		.attr("text-anchor", "middle")
		.text("Age");
	
	vis.g.append("text")
		.attr("x", -(HEIGHT / 2))
		.attr("y", -50)
		.attr("transform", "rotate(-90)")
		.attr("font-size", 20)
		.attr("text-anchor", "middle")
		.text("Height");
		
	vis.update(data);
  }

  update(data) {
	let vis = this;
	vis.datos = data;

	//UPDATE DOMAIN OF SCALES TO DATA
	vis.x.domain([0, d3.max(vis.datos.map((d) => Number(d.age)))]);
	vis.y.domain([0, d3.max(vis.datos.map((d) => Number(d.height)))]);

	//UPDATE AXIS TO DATA
	const xAxisCall = d3.axisBottom(vis.x);
	const yAxisCall = d3.axisLeft(vis.y);

	vis.xAxisGroup.call(xAxisCall);
	vis.yAxisGroup.call(yAxisCall);

	//JOIN DATA TO GEOMETRY
	let circles = vis.g.selectAll("circle")
		.data(vis.datos.map(d => d.name));

		console.log(vis.datos.map(d => d.name));
	console.log("circles_Join", circles);
	// console.log("vis.datos_Join", vis.datos);

	//EXIT
	circles.exit().remove();

	console.log("circles._Exit", circles);
	// console.log("vis.datos_Exit", vis.datos);

	//UPDATE
	vis.datos.map(d => circles
							.enter()
							.append("circle")
							.attr("cx", vis.x(d.age))
							.attr("cy", vis.y(d.height)));

	console.log("circles_Update", circles);
	// console.log("vis.datos_Update", vis.datos);

	//ENTER	
	vis.datos.map(d => circles
								.enter()
								.append("circle")
								.attr("cx", vis.x(d.age))
								.attr("cy", vis.y(d.height))
								.attr("r", 5)
								.attr("fill", "black"));

	console.log("circles_Enter", circles);
	// console.log("vis.datos_Enter", vis.datos);

  }
}

export default D3Chart;