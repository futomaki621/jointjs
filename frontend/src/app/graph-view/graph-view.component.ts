import { Component, OnInit } from '@angular/core';
import * as joint from 'jointjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const graph = new joint.dia.Graph();
    const paper = new joint.dia.Paper({
      el: $('#jointjs-graph'),
      width: 600,
      height: 600,
      model: graph,
    });
    const rect = new joint.shapes.standard.Rectangle({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 30 },
    });

    const rect2: any = rect.clone();
    rect2.translate(300);

    const link = new joint.dia.Link({
      source: { id: rect.id },
      target: { id: rect2.id }
    });

    graph.addCells([rect, rect2, link]);
  }
}
