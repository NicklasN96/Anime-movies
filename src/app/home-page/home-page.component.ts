import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import {Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit {

  private movieUrl = 'https://ghibliapi.herokuapp.com/films/'

  //list of movies
  // movies: Movie[] =  [
  //   { 
  //   id: "1",
  //   title: "Your Name",
  //   description: "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.",
  //   director: "Toho",
  //   producer: "Toho",
  //   release_date: 2016,
  //   rt_score: 91
  //   },{ 
  //   id: "2",
  //   title: "Death Note",
  //   description: "A book that can kill people",
  //   director: "Jakachachi",
  //   producer: "Japan",
  //   release_date: 2014,
  //   rt_score: 67
  //   },{ 
  //     id: "3",
  //     title: "Pokemon movie",
  //     description: "A pokemon movie",
  //     director: "Hamachi",
  //     producer: "Ochu",
  //     release_date: 2001,
  //     rt_score: 70
  //     }
  // ]
  movies:any;
  data:Movie
  
  
  constructor(private router: Router, private http: HttpClient) { }

  
  ngOnInit() {
    let obs = this.http.get('https://ghibliapi.herokuapp.com/films/');
    obs.subscribe((response)=> {
      this.movies = response;
    })
  }

  viewMovie() {
    this.router.navigate(["/movie-details/{{movie.id}}"])
  }
  
}
