using System;
using System.Collections.Generic;

namespace TesteBitti.Domain
{
    public class Cliente
    {
        public int Id{get;set;}
        public string Nome{get;set;}
        public string CpfCnpj{get;set;}
        public DateTime DataNascimento{get;set;}
        public string Sexo{get;set;}
        public string InscricaoEstadual{get;set;}
        public string Profissao{get;set;}
        public List<Endereco> endereco{get;set;}
    }
}
