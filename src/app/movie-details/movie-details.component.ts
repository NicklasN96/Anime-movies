import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Movie';
import { Params, ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  
   private selectedMovie: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedMovie = this.route.snapshot.paramMap.get('id')
  }
   
  viewMovie() {
    this.router.navigate(["/movie-details/{{movie.id}}"])

  }
    
}
