using System.Collections.Generic;

namespace TesteBitti.Domain
{
    public class Endereco
    {
        public int Id{get;set;}
        public string Cep{get;set;}
        public string Logradouro{get;set;}
        public int Numero{get;set;}
        public string Bairro{get;set;}
        public string Cidade{get;set;}
        public string Estado{get;set;}
        public string Complemento{get;set;}
        public Cliente cliente{get;set;}
    
      
    }
}