import { Component } from '@angular/core';
import {
  AgBarSeriesOptions,
  AgCategoryAxisOptions,
  AgChartOptions,
  AgCharts,
  AgLineSeriesOptions,
  AgNumberAxisOptions,
} from "ag-charts-community";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public chartOptions: AgChartOptions;
  public options: AgChartOptions;
  public pieChartOptions: AgChartOptions;
  public doughnutOptions: AgChartOptions;

 
  constructor(){
    this.chartOptions = {
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan', iceCreamSales: 162000 },
        { month: 'Mar', iceCreamSales: 302000 },
        { month: 'May', iceCreamSales: 800000 },
        { month: 'Jul', iceCreamSales: 1254000 },
        { month: 'Sep', iceCreamSales: 950000 },
        { month: 'Nov', iceCreamSales: 200000 },
      ],
      // Series: Defines which chart type and data to use
      series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales', yName:'Month', xName:'Sales' } as AgBarSeriesOptions],
      axes:[
        {
          type:"number",
          position:"left",
          title: {
            text: "Sales",
          }
        },
        {
          type: "category",
          position: "bottom",
          title: {
            text: "Month",
          },
        }
      ]
    };
    this.options = {
      // Data: Data to be displayed within the chart
      data: [
        { month: "Jan", "Primary Circuit (%)": 20, "Beverages Sales": 162000 },
        { month: "Mar", "Primary Circuit (%)": 40, "Beverages Sales": 302000 },
        { month: "May", "Primary Circuit (%)": 90, "Beverages Sales": 800000 },
        { month: "Jul", "Primary Circuit (%)": 80, "Beverages Sales": 1254000 },
        { month: "Sep", "Primary Circuit (%)": 60, "Beverages Sales": 950000 },
        { month: "Nov", "Primary Circuit (%)": 50, "Beverages Sales": 200000 },
      ] ,
      // Series: Defines which chart type and data to use
      series: [
        {
          type: "bar",
          xKey: "month",
          yKey: "Beverages Sales",
        } as AgBarSeriesOptions,
        { type: "line", xKey: "month", yKey: "Primary Circuit (%)" } as AgLineSeriesOptions,
      ],
      // Axes: Configure the axes for the chart
      axes: [
        // Display category (xKey) as the bottom axis
        {
          type: "category",
          position: "bottom",
        } as AgCategoryAxisOptions,
        // Use left axis for 'iceCreamSales' series
        {
          type: "number",
          position: "left",
          keys: ["Beverages Sales"],
        } as AgNumberAxisOptions,
        // Use right axis for 'avgTemp' series
        {
          type: "number",
          position: "right",
          keys: ["Primary Circuit (%)"],
          min: 0,
          max: 100,
          nice: false,
          
        } as AgNumberAxisOptions,
      ],
    };
    this.pieChartOptions = {
      data: [
        { asset: 'Online', amount: 60000 },
        { asset: 'Offline', amount: 40000 },
    ],
      
      series: [
        {
          type: "pie",
          angleKey: "amount",
          legendItemKey: "asset",
        },
      ],
    };
    this.doughnutOptions = {
      data: [
        { asset: 'New Orders', amount: 60000 },
        { asset: 'Inprogress', amount: 40000 },
        { asset: 'Completed', amount: 7000 },
    ],
      
      series: [
        {
          type: "pie",
          calloutLabelKey: "asset",
          angleKey: "amount",
          innerRadiusRatio: 0.7,
        },
      ],
    };
  }
}
