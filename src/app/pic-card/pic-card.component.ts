import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-card',
  templateUrl: './pic-card.component.html',
  styleUrls: ['./pic-card.component.scss']
})
export class PicCardComponent implements OnInit {

  listItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchMore();
  }

  fetchMore(): void {

    const images = ['IuLgi9PWETU', 'fIq0tET6llw', 'xcBWeU4ybqs', 'YW3F-C5e8SE', 'H90Af2TFqng'];

    const newItems = [];
    for (let i = 0; i < 20; i++) {
      const randomListNumber = Math.round(Math.random() * 100);
      const randomPhotoId = Math.round(Math.random() * 4);
      newItems.push({
        title: 'List Item ' + randomListNumber,
        content: 'This is some description of the list - item # ' + randomListNumber,
        image: `https://source.unsplash.com/${images[randomPhotoId]}/50x50`
      });
    }

    this.listItems = [...this.listItems, ...newItems];
  }

}
