import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { Course } from "./courses";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.components.html'
})
export class CourseListComponent implements OnInit{
  courses: Course[] = [];

  constructor(private courseService: CourseService){}

  ngOnInit(): void{
    this.courses = this.courseService.retriveAll()
  }
}