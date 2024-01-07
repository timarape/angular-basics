import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';



@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  course: Course;
  @Input({required:true})
  index: number

  @Input()
  count:number

  @Output()
  courseSelected = new EventEmitter<Course>()

  onViewCourse() {

    console.log("This is a card compenent")

    this.courseSelected.emit(this.course)
  }
}
