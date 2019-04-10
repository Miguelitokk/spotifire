import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

password_type: string = 'password';

togglePasswordMode() {   
   this.password_type = this.password_type === 'password' ? 'text' : 'password';
}
password_type2: string = 'password2';

togglePasswordMode2() {   
   this.password_type2 = this.password_type2 === 'text' ? 'password' : 'text';
}
}
