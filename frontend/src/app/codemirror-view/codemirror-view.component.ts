import { Component, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import * as CodeMirror from 'codemirror';
import * as ts from 'typescript';

@Component({
  selector: 'app-codemirror-view',
  templateUrl: './codemirror-view.component.html',
  styleUrls: ['./codemirror-view.component.css']
})

export class CodemirrorViewComponent implements OnInit, AfterViewInit {

  content = ``;
  text = {
    value: null,
    errors: null,
  };
  options = null;
  source;
  textMarkers = []
  @ViewChild('codemirrorEditor') codemirrorEditor: CodemirrorComponent;
  constructor(private readonly ngZone: NgZone) {
    this.options = {
      lineNumbers: true,
      // theme: 'default',
      // mode: 'javascript',
      styleSelectedText: true,
      // gutters: ['CodeMirror-lint-markers'],
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
      // lint: true,
      // autoCloseBanckets: true,
      // lint: this.codemirrorEditor.value.trim()
      // fmatchBrackets: true,
    };

    this.source = ts.createSourceFile(
      'sample.ts',
      this.content,
      ts.ScriptTarget.Latest,
      true
    );
    this.source
    ts.forEachChild(this.source, each);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.codemirrorEditor.codeMirror.on('change', () => this.write());
    this.codemirrorEditor.codeMirror.setSize(null, 300);
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

    this.source = ts.createSourceFile(
      'sample.ts',
      this.content,
      ts.ScriptTarget.Latest,
      true
    );
    ts.forEachChild(this.source, each);


    // this.textMarkers.forEach(marker => {
    //   marker.clear();
    // });
    this.textMarkers = []
    if (this.source.parseDiagnostics.length > 0) {
      this.source.parseDiagnostics.forEach(parse => {
        console.log(parse);
        console.log(lengthToPos(this.content, parse.start));
        console.log(lengthToPos(this.content, parse.start + parse.length));
        this.textMarkers.push(this.codemirrorEditor.codeMirror.markText(
          lengthToPos(this.content, parse.start),
          lengthToPos(this.content, parse.start + parse.length),
          { className: 'mat-error' }));
        this.text.value = `typescriptの文法ではありません。(${parse.start}文字目)`;
        // console.log(this.codemirrorEditor.codeMirror.getAllMarks());
        console.log(this.textMarkers);
        this.text.errors = parse.messageText;
      });
    }
    console.log(this.source.parseDiagnostics.length);
  }
}

function lengthToPos(code: string, len: number): any {
  // if (code.length < len) {
  //   return {
  //     line: null,
  //     ch: null,
  //   };
  // }
  const lines = code.split('\n')
  for (const l of lines) {
    if (len < l.length) {
      return {
        line: lines.length - 1,
        ch: len,
      };
    } else {
      len -= l.length;
    }
  }
  return {
    line: lines.length - 1,
    ch: len,
  };
}

function each(node: ts.Node) {
  if (node.kind === ts.SyntaxKind.BinaryExpression) {
    // console.log('pon');
    // console.log(node.kind);
    // console.log(node);
  }
  else {
    // console.log('ponpon');
    // console.log(node.kind);
    // console.log(node);
    ts.forEachChild(node, each);
  }
}
