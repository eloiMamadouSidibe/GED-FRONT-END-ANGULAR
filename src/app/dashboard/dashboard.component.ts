import { Component, OnInit } from '@angular/core';
import { SharedWithDashboardService } from '../core/_service/shared-with-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url: string = 'http://localhost:8080/api'
  numberOfType!: number;
  numberOfDossier!: number;
  numberOfSalle!: number;
  numberOfRayon!: number;
  numberOfBoite!: number;
  numberOfProcess!: number;
  numberOfService!: number;
  numberOfSousService!: number;

  
  constructor(private shared: SharedWithDashboardService){}
  ngOnInit(): void {
   this.loadTableData();
  }

  loadTableData(){
    //Pour le type doc
    this.shared.get(`${this.url}/type-documents`).subscribe(
      (response) => {
        this.numberOfType = response.length
      }
    )
    //Pour le dossier
    this.shared.get(`${this.url}/dossiers`).subscribe(
      (response) => {
        this.numberOfDossier = response.length
      }
    )
    //Pour la salle
    this.shared.get(`${this.url}/salles`).subscribe(
      (response) => {
        this.numberOfSalle = response.length
      }
    )
    //Pour le rayon
    this.shared.get(`${this.url}/rayons`).subscribe(
      (response) => {
        this.numberOfRayon = response.length
      }
    )
    //Pour la boîte
    this.shared.get(`${this.url}/boites`).subscribe(
      (response) => {
        this.numberOfBoite= response.length
      }
    )
    //Pour le process
    this.shared.get(`${this.url}/processes`).subscribe(
      (response) => {
        this.numberOfProcess= response.length
      }
    )
    //Pour le service
    this.shared.get(`${this.url}/services`).subscribe(
      (response) => {
        this.numberOfService= response.length
      }
    )
    //Pour le sous service
    this.shared.get(`${this.url}/sous-services`).subscribe(
      (response) => {
        this.numberOfSousService= response.length
      }
    )


  }

}
