import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent} from './line-chart/line-chart.component';
import { LineChart2Component} from './line-chart2/line-chart2.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { SvgDotComponent} from './svg-dot/svg-dot.component';

const routes: Routes = [
  {path: 'lineChart', component: LineChartComponent},
  {path: 'lineChart2', component: LineChart2Component},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'svgDots', component: SvgDotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
