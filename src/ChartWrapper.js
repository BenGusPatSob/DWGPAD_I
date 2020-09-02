import React, { useRef, useState, useEffect, Component } from "react";
import D3Chart from "./D3Chart";

const ChartWrapper = (data) => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chart) {
      //setChart(new D3Chart(chartArea.current, datos));
      setChart(new D3Chart(chartArea.current, data));
    } else {
      //chart.update();
      //setDatos(datos);
      console.log(data);
      chart.update(data);
    }
  }, [chart, data]);

  return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;

/////CURSO:
// export default class ChartWrapper extends Component {
//   componentDidMount() {this.setState({ chart: new D3Chart(this.refs.chart, this.props.data) });}
//   shouldComponentUpdate() {return false;}
//   componentWillReceiveProps(nextProps) {this.state.chart.update(nextProps.data);}
//   render(){return <div className="chart-area" ref="chart"></div>}
// }

/////ANTIGUO:
// const ChartWrapper = (data) => {
//   const chartArea = useRef(null);
//   const [chart, setChart] = useState(null);
//   //const [datos, setDatos] = useState(data);

//   useEffect(() => {
//     if (!chart) {
// 	  //setChart(new D3Chart(chartArea.current, datos));
// 	  setChart(new D3Chart(chartArea.current, data));
//     } else {
//       //chart.update();
//       chart.update(data);
//     }
//   }, [chart, data]);

//   return <div className="chart-area" ref={chartArea}></div>;
// };
