import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Response {
  OPERANDS: {
    MWRANGE: Array<{START: number,END:number, V: string}>
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EasyE4';

  Data: any;

  constructor(private http: HttpClient) { }

  onClick() {
    this.http.get<Response>('https://192.168.0.116/api/get/data?elm=MW(1,5)').subscribe(resp => {
      this.Data = resp;
      let text: string = atob(resp.OPERANDS.MWRANGE[0].V);
      let num: number;
      for (let i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
          console.log(text[i].charCodeAt(0));
        }
        
      }
      //console.log();
    });
  }


}
