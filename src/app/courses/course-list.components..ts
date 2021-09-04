import { Component, OnInit } from "@angular/core";
import { Course } from "./courses";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.components.html'
})
export class CourseListComponent implements OnInit{
  courses: Course[] = [];

  
  ngOnInit(): void{
    this.courses = [
      {
        id: 1,
        name: 'Angular: Formularios',
        imageUrl: '',
        price: 77.77,
        code: 'XPS-8756',
        duration: 120,
        rating: 5.4,
        releaseDate: '04/09/2021'
      },

      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '',
        price: 77.77,
        code: 'XPS-8757',
        duration: 120,
        rating:5.4,
        releaseDate: '04/09/2021'
      }
    ]
  }
}