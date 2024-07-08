import React, { useEffect, useState } from 'react';
import AppTable from './AppTable';
import r_tabel_arrow from '../assets/images/Dashboard/r_tabel_arrow.svg';
import l_tabel_arrow from '../assets/images/Dashboard/l_tabel_arrow.svg';
import r_tabel_arrow_hover from '../assets/images/Dashboard/r_tabel_arrow_hover.svg';
import l_tabel_arrow_hover from '../assets/images/Dashboard/l_tabel_arrow_hover.svg';


import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, ArcElement } from 'chart.js';
import {recordUserVisits} from "../abi/firebasecode";
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler, ArcElement
);

const Dashboard = () => {
 
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider();

  const [linedata1] = useState({
    labels: ["Jan1","Jan2","Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8"],
    datasets: [
      {
        label: "First dataset",
        data: [10000000000000000, 21000000000000000, 21500000000000000, 32000000000000000, 
          43000000000000000, 53300000000000000, 53400000000000000, 63800000000000000,
           60000000000000000, 65400000000000000],
        fill: "start",
        backgroundColor: (context: ScriptableContext<line>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0,
      }
    ]
  })

  const options_Line1 = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          barPercentage: 1,
          borderColor: '#30374B',
        },
        ticks: {
          font: {
            size: 16,
            weight: 500,
            color: "#fff",
          }
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
  };


  // chart_line 2
  const [linedata2] = useState({
    labels: ["Jan1","Jan2","Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8"],
    datasets: [
      {
        label: "First dataset",
        data: [1000000000000000, 900000000000000, 850000000000000, 800000000000000,
          780000000000000, 750000000000000, 730000000000000, 710000000000000],
        fill: "start",
        backgroundColor: (context: ScriptableContext<line>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0,
      }
    ]
  })

  const options_Line2 = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          barPercentage: 1,
          borderColor: '#30374B',
        },
        ticks: {
          font: {
            size: 16,
            weight: 500,
            color: "#fff",
          }
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
  };

  const [linedata3] = useState({
    labels: ["Jan1","Jan2","Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8"],
    datasets: [
      {
        label: "First dataset",
        data: [12, 12.2, 12.4, 12.5, 
          13, 12, 11, 12,
           13, 14],
        fill: "start",
        backgroundColor: (context: ScriptableContext<line>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(30, 0, 0, 250);
          gradient.addColorStop(0, "#A535D9");
          gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
          return gradient;
        },
        borderColor: "#AA14F0",
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0,
      }
    ]
  })

  const options_Line3 = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          barPercentage: 1,
          borderColor: '#30374B',
        },
        ticks: {
          font: {
            size: 16,
            weight: 500,
            color: "#fff",
          }
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
  };

    // chart_line 1
    const [linedata] = useState({
      labels: ["Jan1","Jan2","Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8"],
      datasets: [
        {
          label: "First dataset",
          data: [11, 13, 15, 18, 16, 14, 15, 15],
          fill: "start",
          backgroundColor: (context: ScriptableContext <line>) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(30, 0, 0, 250);
            gradient.addColorStop(0, "#A535D9");
            gradient.addColorStop(1, "rgba(4, 7, 24, 0)");
            return gradient;
          },
          borderColor: "#AA14F0",
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.5,
        }
      ]
    })
  
    const options_Line = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            barPercentage: 1,
            borderColor: '#30374B',
          },
          ticks: {
            font: {
              size: 16,
              weight: 500,
              color: "#fff",
            }
          },
        },
        y: {
          display: false,
          gridLines: {
            display: false,
          },
        },
      },
    };

    const [doughnutData] = useState({
      responsive: true,
      labels: [ "User Holdings","Burned"],
      datasets: [
        {
          data: [90, 10],
          backgroundColor: ['#AA14F0',"white"],
          hoverBackgroundColor: [ '#AA14F0',"white"],
        },
      ],
    });

    
  const optionsDoughnut = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      
    },
  };

  useEffect( () => {
    recordUserVisits(address, "Dashboard");
  }, []);

  return (
    <>
      <div className='Dashboard_main_wrapper'>
     
     
        <div className='app_page '>
          <h2 className='Dashboard_heading'>
            {/* ME Collateral */}
            </h2>
          <div className='chart_row'>
            <div className='chart_items'>
              <div className='chart_1'>
              <center><h4 style={{fontSize:'1.15rem', color: '#aa14f0'}}>
            Marketcap
            </h4></center>
                <div className='line_block'>
                  <Line data={linedata1} options={options_Line1} id="chart"></Line>
                </div>
              </div>
              <div className='chart_2'>
              <center> <h4 style={{fontSize:'1.15rem', color: '#aa14f0'}}>
            CirculatingSupply
            </h4></center>
                <div className='line_block'>
                  <Line data={linedata2} options={options_Line2} id="chart"></Line>
                </div>
              </div>
            </div>
          </div>
          <div className='chart_row'>
            <div className='chart_items'>
              <div className='chart_1' >
              <center><h4 style={{fontSize:'1.15rem', color: '#aa14f0'}}>
            Floor Price
            </h4></center>
                <div className='line_block'>
                  <Line data={linedata3} options={options_Line3} id="chart"></Line>
                </div>
              </div>
              <div className='chart_2'><center><h4 style={{paddingLeft:"30px",fontSize:'1.15rem', color: '#aa14f0' }}>
            UserHoldings Vs Burned
            </h4></center>
                {/* <div className='line_block'>
                  <Line data={linedata2} options={options_Line2} id="chart"></Line>
                </div> */}
                 <div className='line_block'>
                 <div className='doughnut-container' style={{ maxWidth: '330px', margin: 'auto', width: '100%'}}>
                    <Doughnut data={doughnutData} options={optionsDoughnut} id="doughnut-chart"></Doughnut>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='top_tokens_block'>
            <div className='top_tokens_heading'>
              <h2 className='Dashboard_heading'>Top Tokens</h2>
            </div>
            <div className='apptable_block'>
              <AppTable />
              <div className='table_arrow'>
                <div className='hover_arrow'>
                  <img src={l_tabel_arrow} alt="" />
                  <img src={l_tabel_arrow_hover} alt="" />
                </div>
                <span>Page 1 of 1</span>
                <div className='hover_arrow'>
                  <img src={r_tabel_arrow} alt="" />
                  <img src={r_tabel_arrow_hover} alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Dashboard;