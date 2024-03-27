import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoResponse } from '../../models/todo-response';
import { ModelListResponse } from '../../models/responses/model-list-response';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  todoList:TodoResponse[]=[];
  modelList:ModelListResponse[]=[];

  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getListModels();
  }

  getListModels(){
    this.httpClient.get<ModelListResponse[]>("http://localhost:5190/api/Models")
    .subscribe({
      next:(response:ModelListResponse[])=>{
        console.log("Cevap geldi :",response);
        this.modelList=response;
      },
      error:(error)=>{console.log("cevap hatalı :",error)},
      complete:()=>{console.log("istek sonlandı")}
    })
  }
 
  getListTodos(){
    this.httpClient.get<TodoResponse[]>("https://jsonplaceholder.typicode.com/todos")
    .subscribe({
      next:(response:TodoResponse[])=>{
        console.log("Cevap geldi :",response);
        this.todoList=response;
      },
      error:(error)=>{console.log("cevap hatalı :",error)},
      complete:()=>{console.log("istek sonlandı")}
    })
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
