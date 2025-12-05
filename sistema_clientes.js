function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    // Métodos Get e Set
    this.getDdd = function() { return this.ddd; }
    this.setDdd = function(novoDdd) { this.ddd = novoDdd; }
    
    this.getNumero = function() { return this.numero; }
    this.setNumero = function(novoNumero) { this.numero = novoNumero; }

    this.getDddMaiusculo = function() { return this.ddd.toString().toUpperCase(); }
    this.getDddMinusculo = function() { return this.ddd.toString().toLowerCase(); }

    this.getNumeroMaiusculo = function() { return this.numero.toString().toUpperCase(); }
    this.getNumeroMinusculo = function() { return this.numero.toString().toLowerCase(); }
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    // Métodos Get e Set
    this.getEstado = function() { return this.estado; }
    this.setEstado = function(novoEstado) { this.estado = novoEstado; }
    
    this.getCidade = function() { return this.cidade; }
    this.setCidade = function(novaCidade) { this.cidade = novaCidade; }
    
    this.getRua = function() { return this.rua; }
    this.setRua = function(novaRua) { this.rua = novaRua; }

    this.getNumero = function() { return this.numero; }
    this.setNumero = function(novoNumero) { this.numero = novoNumero; }

    // Métodos Caixa Alta/Baixa
    this.getEstadoMaiusculo = function() { return this.estado.toUpperCase(); }
    this.getEstadoMinusculo = function() { return this.estado.toLowerCase(); }
    
    this.getCidadeMaiuscula = function() { return this.cidade.toUpperCase(); }
    this.getCidadeMinuscula = function() { return this.cidade.toLowerCase(); }
    
    this.getRuaMaiuscula = function() { return this.rua.toUpperCase(); }
    this.getRuaMinuscula = function() { return this.rua.toLowerCase(); }

    this.getNumeroMaiusculo = function() { return this.numero.toString().toUpperCase(); }
    this.getNumeroMinusculo = function() { return this.numero.toString().toLowerCase(); }
}

function Cliente(nome, telefone, email, endereco) {
    this.nome = nome;
    this.telefone = telefone; 
    this.email = email;
    this.endereco = endereco;

    // Métodos Get e Set
    this.getNome = function() { return this.nome; }
    this.setNome = function(novoNome) { this.nome = novoNome; }
    
    this.getEmail = function() { return this.email; }
    this.setEmail = function(novoEmail) { this.email = novoEmail; }

    this.getTelefone = function() { return this.telefone; }
    this.setTelefone = function(novoTelefone) { this.telefone = novoTelefone; }

    this.getEndereco = function() { return this.endereco; }
    this.setEndereco = function(novoEndereco) { this.endereco = novoEndereco; }

    this.getNomeMaiusculo = function() { return this.nome.toUpperCase(); }
    this.getNomeMinusculo = function() { return this.nome.toLowerCase(); }

    this.getEmailMaiusculo = function() { return this.email.toUpperCase(); }
    this.getEmailMinusculo = function() { return this.email.toLowerCase(); }

    Object.defineProperty(this, 'descricao', {
        get: function() {
            return `
Informações do Cliente:
${this.nome}
----------------------
Telefone:
DDD: ${this.telefone.ddd}
Número: ${this.telefone.numero}
----------------------
Endereço:
Rua: ${this.endereco.rua}
Número: ${this.endereco.numero}
Cidade: ${this.endereco.cidade}
Estado: ${this.endereco.estado}
            `;
        }
    });
}

function ordenarClientes(listaClientes) {
    return listaClientes.slice().sort(function(a, b) {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });
}

let telefone1 = new TelefoneCelular('11', '999999999');
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1);

let telefone2 = new TelefoneCelular('21', '988888888');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Copacabana', '100');
let cliente2 = new Cliente('Ana Souza', telefone2, 'ana@app.com', endereco2);

let cliente3 = new Cliente('Bruno Lima', telefone1, 'bruno@app.com', endereco1);

console.log(cliente1.descricao); 

let lista = [cliente1, cliente2, cliente3]; 
console.log("\n=== ORDENAÇÃO POR NOME ===");
let ordenados = ordenarClientes(lista);
ordenados.forEach(c => console.log(c.nome));