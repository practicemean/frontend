import { Component, OnInit } from '@angular/core';
import {faCaretDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ladingpage',
  templateUrl: './ladingpage.component.html',
  styleUrls: ['./ladingpage.component.scss']
})
export class LadingpageComponent implements OnInit {
 
  faCaretDown  = faCaretDown 

  
  constructor() { }

  ngOnInit(): void {
  }

}
