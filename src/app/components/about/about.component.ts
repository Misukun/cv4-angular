import { Component, OnInit } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

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
    let myHeaders = new Headers;
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    myHeaders.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return this._http
      .get('http://eloyariascurriculum.com/assets/img/' + name + '.pdf', {
        responseType: ResponseContentType.Blob,
        headers: myHeaders
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
