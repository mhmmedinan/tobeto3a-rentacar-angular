import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  todoList:string[]=[
    // 'todolist 1',
    // 'todolist 2',
    // 'todolist 3'
  ];

  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getTodos2();
  }

 


  getTodos1(){

    console.log("Öncesi")
    this.asyncOperation()
    .then((response:string)=>{
      console.log("Doğru çalıştı : ",response)
    })
    .catch((error)=>{
      console.log("Hata :",error)
    })
    .finally(()=>{
      console.log("Başarılı veya başarısız");
    })
    console.log("sonrası")
  }

  async getTodos2(){
    try {
      let values = await this.asyncOperation();
      console.log(values);
    } catch (error) {
      console.log("hata :",error)
    }
  }

  asyncOperation():Promise<string>{
    //callback function
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject("çalıştı");
      })
    });
  }

}
