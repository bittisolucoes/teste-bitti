Utilizando as tecnologias ASP.NET Core 2.2 e Angular 9, deverá ser desenvolvido um sistema que seja capaz de manter os clientes de uma empresa. Os dados a serem armazenados são:

- Nome - obrigatório com no máximo 100 caracteres;
- CPF/CNPJ - obrigatório e com máscara (a troca da máscara entre cpf e cnpj deverá ser dinâmica, baseando-se no número de caracteres digitados);
- Data de nascimento - obrigatório e deverá aparecer apenas caso o cadastro seja de uma pessoa física
- Sexo - Radio buttton que deverá aparecer apenas caso o cadastro seja de uma pessoa física e deverá ter as seguintes opções:
     - masculino
     - feminino
     - outro
- Inscrição estadual - deverá aparecer apenas caso o cadastro seja de uma pessoa jurídica. Máximo de 30 caracteres;
- Profissão - obrigatório e deverá ser um dropdown de escolha única e com as seguintes opções: 
    - DESENVOLVEDOR
    - TESTER
    - GERENTE DE PROJETOS.
- Lista de endereços com os seguintes campos:
   - CEP: Obrigatório e com máscara;
   - Logradouro: Obrigatório com máximo de 100 caracteres;
   - Número: Obrigatório com máximo de 10 caracteres;
   - Bairro: Obrigatório com máximo de 100 caracteres;
   - Cidade: Obrigatório com no mínimo 2 caracteres e no máximo de 50;
   - Estado: campo dropdown obrigatório e com as seguintes opções: RS, SC E PR. Detalhe: na visualização das opções, deverá ter o nome completo de cada estado. A sigla será usada apenas para salvar no banco;
   - Complemento: Máximo de 200 caracteres.
 - A lista de endereços deverá ser mantida na mesma tela dos outros campos do cliente.
 - Incluir filtros na listagem dos clientes;
 - O uso de bibliotecas de terceiros é permitida, mas apenas em casos onde realmente seja necessário. Atente-se a isso.
 - Caso a documentação escrita aqui não responda as dúvidas em todos os casos, é possível que você tome decisões optando por um ou por outro lado. Apenas é importante saber defender o seu ponto de vista e conhecer outros caminhos que poderiam levar ao mesmo resultado (por que você escolheu essa forma para fazer isso e não de outra?)
 - Um detalhe importante: é interessante que todos os requisitos sejam atendidos, mas deixar de fazer um item ou outro não é o fim do mundo. O objetivo é que dentre esse universo de funcionalidades que foram solicitadas, você consiga mostrar quais você sabe fazer, e além disso, o mais importante: COMO você resolve o problema.
 
 - Sucesso!
