import React from 'react' ;
import dynamic from 'next/dynamic'
import DashLayout from '../Layout/Dashlayout'
import ChartistGraph from "react-chartist";
import Card from '../component/Card/Card' ;
import StatsCard from '../component/StatsCard/StatsCard' ;
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/js/fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faMoneyBill,faDatabase } from '@fortawesome/free-solid-svg-icons' ;
library.add(faMoneyBill,faDatabase) ;
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "../variables/Variables";
// const Editor = dynamic(()=>import('../component/Editor/Editor'),{
//     ssr:false,
// })

function Dashboard(){


  function createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
    return (
       <DashLayout>
        <div class="content dash_body">
          <div className="grid grid-cols-4 md gap-4 ">
              <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <StatsCard
                bigIcon={<FontAwesomeIcon icon={faDatabase} />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <StatsCard
                bigIcon={<FontAwesomeIcon icon={faMoneyBill} color="green"/>}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />

              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />

              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-1">
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
          
          
               </div>
          </div>
          <div className="grid grid-cols-6 md gap-4 " >

            
            <div className="col-span-6 md:col-span-4  sm:col-span-4">
            <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(legendSales)}</div>
                }
              />
              </div>
            <div className="col-span-6  md:col-span-2 sm:col-span-3">
            <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(legendPie)}</div>
                }
              />
            </div>
            <div className="col-span-6 md:col-span-4 sm:col-span-3"><Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(legendBar)}</div>
                }
              /></div>
            <div className=" col-span-6  md:col-span-2 sm:col-span-4">
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      
                    </table>
                  </div>
                }
              />
            </div>
          
            
          </div>
        </div>
       </DashLayout>
    )
}



export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
  

//const dash=dynamic(()=>dashboard ,{ssr:false})

export default Dashboard;