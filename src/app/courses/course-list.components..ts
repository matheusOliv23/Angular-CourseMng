import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { Course } from "./courses";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.components.html'
})
export class CourseListComponent implements OnInit{
  
  filteredCourses: Course[] = []
 
  _courses: Course[] = [];  
  _filterBy: string

  constructor(private courseService: CourseService){}

  ngOnInit(): void{
    this._courses = this.courseService.retriveAll()
    this.filteredCourses = this._courses
  }


  set filter(value: string){
    this._filterBy = value
    this.filteredCourses = this._courses.filter((course: Course)=> course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

  get filter(){
    return this._filterBy
  }
}