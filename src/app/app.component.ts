import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-app';
  message = ''
  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<MessageResults>('http://localhost:1234/hello').subscribe(data => {
        this.message = data.message;
    })
  }
}

interface MessageResults {
  message: string;
}
