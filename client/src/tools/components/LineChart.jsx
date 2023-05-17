import React from 'react'
import { Line } from 'react-chartjs-2'
import { Typography, Row, Col } from 'antd'
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale)

const { Title } = Typography;

export default function LineChart({coinHistory, currentPrice, coinName}) {
  const coinPrice = [];
  const coinTimeStamps = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i+=1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimeStamps.push(Date(coinHistory?.data?.history[i].timestamp).substring(0, 21));
  }

  console.log(coinTimeStamps)
  const data = {
    labels: coinTimeStamps,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: "#0071bd"
      }
    ]
  };

  const options = {
    scales: { 
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  return (
    <>
        <Row className='chart-header'>
            <Title level={2} className="chart-title">{coinName} Price Chart</Title>
            <Col className='price-container'>
                <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                <Title level={5} className="current-price">Current {coinName} Price: ${currentPrice}</Title>
                <Title></Title>
            </Col>
            <Line data={data} options={options}/>
        </Row>
    </>
  )
}
