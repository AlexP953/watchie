import { Component, OnInit } from '@angular/core';
import { APICallService } from '../../services/api-call.service';
import { ManageElementsService } from 'src/app/services/manage-elements.service';
import { ActivatedRoute } from '@angular/router';
import { audiovisualDetail } from 'src/app/interfaces/audiovisual';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    public apiCall: APICallService,
    private route: ActivatedRoute,
    private ManageElementsService: ManageElementsService
  ) {}

  id: string | null = '';
  type: string | null = '';
  audiovisual: audiovisualDetail = {};
  approbed: boolean = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');

    this.apiCall
      .getDetail(Number(this.id), this.type)
      .subscribe((detail: any) => {
        this.audiovisual = detail;
        if (detail.vote_average > 5) {
          this.approbed = true;
        }
      });
  }

  addToFavorites(element: audiovisualDetail) {
    this.ManageElementsService.addToFavorites(element, this.type!);
  }

  deleteToFavorites(element: audiovisualDetail) {
    this.ManageElementsService.deleteToFavorites(element, this.type!);
  }
}
