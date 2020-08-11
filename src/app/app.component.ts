import { Component,OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  dynamicStyles: any[];
  dynamicScripts: any[];
  constructor(private renderer: Renderer2) {
    this.dynamicStyles = [];
    this.dynamicScripts = [];
  }
  ngOnInit() {
    this.loadStyle();
    this.loadScripts();
  }

  loadStyle() {
    this.dynamicStyles = [
     
    ];
    for (let i = 0; i < this.dynamicStyles.length; i++) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.type = 'text/css';
      link.href = this.dynamicStyles[i];
      document.head.appendChild(link);
    }
  }

  loadScripts() {

    this.dynamicScripts = [
      '/assets/script/jquery/jquery.min.js',
      '/assets/script/bootstrap/bootstrap.bundle.min.js'
    ]

    for (let i = 0; i < this.dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = this.dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }
}
