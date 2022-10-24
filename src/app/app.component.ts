import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crm_dashboard';
  showMeeting() {
    this.title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, obcaecati? Omnis aperiam distinctio eveniet alias ipsa! Nisi harum totam ad reprehenderit sunt architecto voluptas eos libero? Ab recusandae totam ullam!';
  }

  hideMeeeting() {
    this.title = 'nothing selected';
  }
}
