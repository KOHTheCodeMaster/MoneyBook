import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LeftSidebarComponent} from "./left-sidebar/left-sidebar.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {RightSidebarComponent} from "./right-sidebar/right-sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeftSidebarComponent, MainContentComponent, RightSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MoneyBook';
}
