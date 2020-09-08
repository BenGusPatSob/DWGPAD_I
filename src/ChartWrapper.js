import React, { useRef, useState, useEffect } from "react";
//import React, { Component } from "react";
import D3Chart from "./D3Chart";

const ChartWrapper = (dataIn) => {
  const chartD3 = useRef(null);
  const [chart, setChart] = useState(null);
  const [datos, setDatos] = useState(dataIn);

  function handleChange(newDatos){    
    //this.props.updateData([ ...this.props.data, this.state ]);
    setDatos(newDatos);
  }

  useEffect(() => {
    if (!chart) {
      console.log("Creando Chart: ", datos.data);
      setChart(new D3Chart(chartD3.current, datos.data));
    } else {
      console.log("Desde ChartWrapper (datos): ", datos.data);
      console.log("Desde ChartWrapper (chart): ", chart);
      handleChange(datos)
      chart.update(datos.data);
    }
  }, [datos, chart]);

  return <div className="chart-area" ref={chartD3} onChange={handleChange}></div>;
};

export default ChartWrapper;


// export default ChartWrapper;

// export default class ChartWrapper extends Component {
//   componentDidMount() {
//     this.setState({ chart: new D3Chart(this.refs.chart, this.props.data) });
//   }
//   shouldComponentUpdate() {
//     return false;
//   }
//   componentWillReceiveProps(nextProps) {
//     // console.log("Pues yo bien", nextProps);
//     this.state.chart.update(nextProps.data);
//   }
//   render() {
//     return <div className="chart-area" ref="chart"></div>;
//   }
// }
