import { Component, OnInit } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _http: Http) { }

  ngOnInit() {
  }

  downloadFile(name) {
    return this._http
      .get('http://localhost:4200/assets/img/' + name + '.pdf', {
        responseType: ResponseContentType.Blob
      })
      .subscribe(res => {
        console.log('start download:',res);
        var url = window.URL.createObjectURL(res.blob());
        var a = document.createElement('a');
        let filename = name + '.pdf';
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
      }, error => {
        console.log('download error:', JSON.stringify(error));
      });
  }

}
