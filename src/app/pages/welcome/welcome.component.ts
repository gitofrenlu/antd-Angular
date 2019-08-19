import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  bizType = [
    {
      label: '车业务',
      value: 2
    },
    {
      label: '有用业务',
      value: 1
    }
  ];
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  formData = {
    contractNo: '',
    customerName: '',
    certId: '',
    contractSource: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
