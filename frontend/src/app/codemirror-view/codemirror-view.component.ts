import { Component, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import * as CodeMirror from 'codemirror';

@Component({
  selector: 'app-codemirror-view',
  templateUrl: './codemirror-view.component.html',
  styleUrls: ['./codemirror-view.component.css']
})

export class CodemirrorViewComponent implements OnInit, AfterViewInit {

  content = null;
  text = {
    value: null,
    errors:null,
  };
  options = null;
  @ViewChild('codemirrorEditor') codemirrorEditor: CodemirrorComponent;
  constructor(private readonly ngZone: NgZone) {
    this.options = {
      lineNumbers: true,
      theme: 'default',
      mode: 'javascript',
      gutters: ['CodeMirror-lint-markers'],
      // lint: {
      //   getAnnotations: (context: string, updateLinting: (any) => void, options: any, cm: any) => {
      //     this.ngZone.run(() => {
      //       if (!context || !context.trim()) {
      //         updateLinting([]);
      //         return;
      //       } else {
      //         const linter = cm.getHelper({ line: 0 }, 'lint');
      //         const found = linter(context);
      //         updateLinting(found);
      //       }
      //       return;
      //     });
      //   },
      //   async: true,
      // }
      lint: true,
      // autoCloseBanckets: true,
      // lint: this.codemirrorEditor.value.trim()
      // fmatchBrackets: true,
    };
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.codemirrorEditor.codeMirror.on('change', () => this.write());
    this.codemirrorEditor.codeMirror.setSize(null,300);
  }
  write() {
    // console.log(this.codemirrorEditor.codeMirror.getValue());
    // console.log(this.codemirrorEditor.codeMirror.getGutterElement());
    if (this.content !== null && this.content !== undefined && this.content.trim() !== '') {
      this.text.value = '書いた文字を消して！';
      this.text.errors = 'Yukisan is Ponpon!';
    } else {
      this.text.value = 'なんか書いてよ！';
      this.text.errors = 'ゆきさんはぽんぽん';
    }
  }
}
