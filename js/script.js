

function validarClientes() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    if (nome == "" || email == "" || cep == "" || numero == ""|| rua == "" || bairro == "" || cidade == "" || estado == "")
        alert("Favor preencher todos os campos obrigatórios");
    else cadastrarClientes();
}


function cadastrarClientes(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    let novoCliente = {
        nome,
        email,
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
    }

    if (typeof(Storage) !== "undefined") {
        let cliente = localStorage.getItem("cliente");
        if (cliente == null) cliente = [];
        else cliente = JSON.parse(cliente);
        cliente.push(novoCliente);
        localStorage.setItem("cliente",JSON.stringify(cliente))
        alert("Cliente foi cadastrado.")
}
};

function listarProdutos() {

if (typeof(Storage) !== "undefined") {
    let produtos = localStorage.getItem("produtos");
    document.write("<h1>Estoque:</h1>")
    if (produtos == null)
        document.write("<h3>Ainda não há nenhum item no estoque</h3>");
    else {

            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write(`<li>Nome do produto: ${produto.nome}</li>`);
                document.write(`<li>Descrição: ${produto.descricao}</li>`);
                document.write(`<li>Valor: ${produto.valor}</li>`);
                document.write(`<li>Quantidade: ${produto.qtd}</li>`);
                document.write("</ul>");
    })
    
    }
} 
};


function listarClientes() {

    if (typeof(Storage) !== "undefined") {
        let cliente = localStorage.getItem("cliente");
        document.write("<h1>Clientes Cadastrados:</h1>")
        if (cliente == null)
            document.write("<h3>Ainda não há nenhum cadastro</h3>");
        else {
            cliente = JSON.parse(cliente);
            cliente.forEach(cliente => {
                document.write("<ul>");

                document.write(`<li>Nome: ${cliente.nome}</li>`);
                document.write(`<li>E-mail: ${cliente.email}</li>`);
                document.write(`<li>CEP: ${cliente.cep}</li>`);
                document.write(`<li>Rua/Av: ${cliente.rua}</li>`);
                document.write(`<li>Número: ${cliente.numero}</li>`);
                document.write(`<li>Complemeto: ${cliente.complemento}</li>`);
                document.write(`<li>Bairro: ${cliente.bairro}</li>`);
                document.write(`<li>Cidade: ${cliente.cidade}</li>`);
                document.write(`<li>Estado: ${cliente.estado}</li>`);

               
                document.write("</ul>");
            });
        }
    }     }

    
function validarProdutos() {
    let nome = document.getElementById('nomeProduto').value;
    let codigo = document.getElementById('codigo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;
    let quantidade = document.getElementById('quantidade').value;

    if (nome == "" || codigo == "" || descricao == "" || valor == "" || quantidade == "")
        alert("Favor preencher todos os campos");
    else cadastrarProdutos(nome, codigo, descricao, valor, quantidade);
}

function cadastrarProdutos(){
    let nome = document.getElementById('nomeProduto').value;
    let codigo = document.getElementById('codigo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;
    let quantidade = document.getElementById('quantidade').value;
    
    let novoProduto = {
        nome, 
        codigo, 
        descricao,
        valor, 
        quantidade }

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto);
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Produto foi cadastrado.")
}};

