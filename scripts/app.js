import api from './api.js';

const ui = {
    async redenrizarTarefas(){

        const listaTarefas = document.getElementById('lista-tarefas');

        try {
            const tarefas = await api.buscarTarefas();
            tarefas.forEach(tarefa =>{
                listaTarefas.innerHTML +=`
                <li class="cartao_tarefa ${tarefa.propriedade}" id="${tarefa.id}">
                    <h3>${tarefa.titulo}</h3>
                    <p class="descricao">${tarefa.descricao}</p>
                    <p>propriedade: ${tarefa.propriedade}</p>
                    
                </li>            `
                     
            })
        } catch  {
            alert('Erro ao redenrizar as tarefas');
        }    
        
    }
}
export default ui; 