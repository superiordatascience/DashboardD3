import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent} from './line-chart/line-chart.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { SvgDotComponent} from './svg-dot/svg-dot.component';

const routes: Routes = [
  {path: 'lineChart', component: LineChartComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'svgDots', component: SvgDotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
