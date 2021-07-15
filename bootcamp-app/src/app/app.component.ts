import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public album = {
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    releaseDate: new Date(1973, 3, 24),
    coverArt:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Optical-dispersion_%281%29.png/390px-Optical-dispersion_%281%29.png',
    tracks: [
      { order: 1, title: 'Speak to Me' },
      { order: 2, title: 'Breathe' },
      { order: 3, title: 'On the Run' },
      { order: 4, title: 'Time' },
      { order: 5, title: 'The Great Gig in the Sky' },
    ],
  };
}


