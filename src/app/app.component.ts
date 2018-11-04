import { Component } from '@angular/core';
import { MOCK_DATA } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finance Tracker';
  data = MOCK_DATA;
}
