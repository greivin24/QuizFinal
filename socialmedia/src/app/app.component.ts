import { Component } from '@angular/core';
import { SocialMedia } from '../app/interface/interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialmedia';

  public listMedia:SocialMedia[] =[
    {
      nombre : "Facebook",
      icon:"shake fa fa-facebook-official fa-3x",
      text:"gfdgdfgdfg",
      activo:true

    },
    {
      nombre : "Instagram",
      icon:"shake fa fa-instagram fa-3x",
      text:"gfsgfgfg",
      activo:true

    },
    {
      nombre : "Google",
      icon:"shake fa fa-google-plus fa-3x",
      text:"sdfsdfsdf",
      activo:true

    },
    {
      nombre : "Pinterest",
      icon:"shake fa fa-pinterest-p fa-3x",
      text:"fdfdsf",
      activo:true

    },
    {
      nombre : "Twitter",
      icon:"shake fa fa-twitter fa-3x",
      text:"dsfdsfds",
      activo:true

    },
    {
      nombre : "Githib",
      icon:"shake fa fa-git-square fa-3x",
      text:"sdfsdgfsdfgds",
      activo:true

    }
  ];


}
