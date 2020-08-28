import React, { useRef, useState, useEffect } from "react";
import D3Chart from "./D3Chart";

const ChartWrapper = (data) => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);
  //const [datos, setDatos] = useState(data);

  useEffect(() => {
    if (!chart) {
	  //setChart(new D3Chart(chartArea.current, datos));
	  setChart(new D3Chart(chartArea.current, data));
    } else {
      chart.update();
    }
  }, [chart]);

  return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;

//export default class Chartwrapper extends Component {
//	componentDidMount() {
//		console.log(this);
//		this.setState({
//			chart: new D3Chart(this.refs.chart, this.props.data),
//		});
//		console.log(this);
//	}
//
//	shouldComponentUpdate() {
//	return false;
//	}
//
//	render() {
//	return <div className="chart-area" refs="chart"></div>;
//	}
//}
