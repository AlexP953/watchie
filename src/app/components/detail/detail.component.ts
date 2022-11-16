import { Component, OnInit } from '@angular/core';
import { APICallService } from '../../services/api-call.service';
import { ActivatedRoute, } from '@angular/router';
import { audiovisualDetail } from 'src/app/interfaces/audiovisual';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(public apiCall: APICallService, private route: ActivatedRoute) {}

  id: string | null = '';
  type: string | null = '';
  audiovisual: audiovisualDetail = {};

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');

    this.apiCall
      .getDetail(Number(this.id), this.type)
      .subscribe((detail: any) => {
        this.audiovisual = detail;
      });
  }
}
