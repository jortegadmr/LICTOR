import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse } from './tipo-expediente/req-response';
import { HttpClient } from '@angular/common/http';

interface State{
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject (HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  })

  public users = computed ( () => this.#state().users);
  public loading = computed ( () => this.#state().loading);


  constructor() { 

    this.http.get<UserResponse>('https://reqres.in/api/users').pipe()
    .subscribe(res => {

      this.#state.set({
        loading: false,
        users: res.data,
      })
    })

    console.log('Cargando Data');
  }

}
