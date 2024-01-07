import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 coreCoures = COURSES[0]

 onCourseSelected(course: Course){
  console.log(" App compoent - click bubbled to the parent", course)

 }
}
