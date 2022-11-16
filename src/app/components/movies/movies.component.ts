import { Component, OnInit } from '@angular/core';
import { APICallService } from '../../services/api-call.service';
import { audiovisual } from 'src/app/interfaces/audiovisual';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  audiovisual: audiovisual[] = [];

  constructor(public apiCall: APICallService) {}

  ngOnInit(): void {
    this.apiCall.getPopular('movie').subscribe((data: any) => {
      this.audiovisual = data;
    });
  }

  getDetail(id: number, type: string) {
    this.apiCall.getDetail(id, type).subscribe((detail: any) => {
      console.log('detail', detail);
    });
  }
}
