import { Component, OnInit } from '@angular/core';
import { APICallService } from '../../services/api-call.service';
import { audiovisual } from 'src/app/interfaces/audiovisual';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss'],
})
export class TvSeriesComponent implements OnInit {
  audiovisual: audiovisual[] = [];

  constructor(public apiCall: APICallService) {}

  ngOnInit(): void {
    this.apiCall.getPopular('tv').subscribe((data: any) => {
      this.audiovisual = data;
    });
  }

  getDetail(id: number, type: string) {
    this.apiCall.getDetail(id, type).subscribe((detail: any) => {
      console.log('detail', detail);
    });
  }
}
