import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { AlunoModel } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();
  alunos: Array<any> = new Array();

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }

  cadastrar() {
    console.log(this.aluno);
  }

  listarAlunos() {
    this.alunosService.listarAlunos().subscribe(alunos => {
      this.alunos = alunos;
    }, err => {
      console.log('Erro ao listar os alunos', err);
    })
  }

}
