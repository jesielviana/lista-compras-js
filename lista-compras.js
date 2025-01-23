const listCompras = []

menu:
while(true){
    const menu = `
    Selecione uma opção:
    1 - Adicionar item na lista
    2 - Remover item na lista
    3 - Exibir lista
    0 - Sair
    : `
    const opcao = parseInt(prompt(menu))
    switch(opcao){
        case 1:
            add()
            break;
        case 2:
            remove()
            break;
        case 3:
            exibe()
            break;
        case 0:
            break menu;
        default: 
            console.log('opção inválida')
    }
}

function add(){
    const item = prompt('Informe o item: ')
    listCompras.push(item)
}

function remove(){
    const item = prompt('Informe o item: ')

    const index = listCompras.indexOf(item)
    if(index >= 0){
        listCompras.splice(index, 1);
    }else{
        console.log('o item informado não está na lista')
    }
}

function exibe(){
    for (const item of listCompras) {
        console.log(item)
    }
}