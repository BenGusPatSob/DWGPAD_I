// import React, { useRef, useState, useEffect, Component } from "react";
import React, { Component } from "react";
import D3Chart from "./D3Chart";

// const ChartWrapper = (data) => {
//   const chartArea = useRef(null);
//   const [chart, setChart] = useState(null);
//   const [datos, setDatos] = useState(data);

//   useEffect(() => {
//     if (!chart) {
//       setChart(new D3Chart(chartArea.current, datos));
//     } else {
//       //chart.update();
//       setDatos(datos);
//       chart.update(datos);
//     }
//   }, [chart, datos]);

//   return <div className="chart-area" ref={chartArea}></div>;
// };

// export default ChartWrapper;

export default class ChartWrapper extends Component {
  componentDidMount() {
    this.setState({ chart: new D3Chart(this.refs.chart, this.props.data) });
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps(nextProps) {
    console.log("Pues yo bien", nextProps);
    this.state.chart.update(nextProps.data);
  }
  render() {
    return <div className="chart-area" ref="chart"></div>;
  }
}
