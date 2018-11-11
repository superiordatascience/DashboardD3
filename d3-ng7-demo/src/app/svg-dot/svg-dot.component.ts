import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-svg-dot',
  templateUrl: './svg-dot.component.html',
  styleUrls: ['./svg-dot.component.css']
})
export class SvgDotComponent implements OnInit {

  ngOnInit() {}


  title = 'D3 Dashboard - SDS';
  radius = 10;
  
  ngAfterContentInit() {
    d3.select('p').style('color','red');
    }

    colorMe() {
      d3.select('p').style('color','red');
      d3.select('button').style('color', 'red');
    }
  
    clicked(event: any) {
      d3.select(event.target).append('circle')
        .attr('cx', event.x-6)
        .attr('cy', event.y - 100)
        .attr('r', () => {
          return this.radius;
        })
        .attr('fill', 'red');
    }
}
