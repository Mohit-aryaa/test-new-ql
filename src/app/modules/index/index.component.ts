import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  dataTable:any = []
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataTable = this.data;
    }, 2000);
  }

  data:any = [
    {id:1, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:2, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:3, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:4, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:5, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:6, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:7, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:8, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:9, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:10, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:11, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:12, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:13, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:14, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'},
    {id:15, name:'john', idNumber:'5123212xxxx', location: 'Centurion, South Africa', email: 'greg@hellocrowd.net', mobile:'+27 82 801 4085', active:'30 days'}

  ]

}
