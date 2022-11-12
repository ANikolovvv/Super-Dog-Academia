import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: string[] = [
    "../../assets/trainer2.jpg",
   "../../assets/stick-k9.jpg",
   "../../assets/trainer.png",
   "../../assets/trainer1.jpg",
   "../../assets/dog0.jpg",
   "../../assets/dog5.jpg",
   "../../assets/dog4.jpg",
   "../../assets/dog.jpg",
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
