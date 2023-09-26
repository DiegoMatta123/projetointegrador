import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cadastroelogin';

  ngOnInit(): void {
  const firebaseConfig = {
    apiKey: "AIzaSyCMJglfkYS83ZDJWGyrIql1hfIpgGrPPXQ",
  authDomain: "finalizarcompra-1242e.firebaseapp.com",
  databaseURL: "https://finalizarcompra-1242e-default-rtdb.firebaseio.com",
  projectId: "finalizarcompra-1242e",
  storageBucket: "finalizarcompra-1242e.appspot.com",
  messagingSenderId: "545645280476",
  appId: "1:545645280476:web:10ad25d841bf00e1b74819",
  measurementId: "G-GWE0Z5T5P8"
  };

  firebase.initializeApp(firebaseConfig);
}
  
}
