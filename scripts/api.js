const api = {
    async buscarTarefas(){
        try{ 
            const response = await fetch('http://localhost:3000/tarefas');
            return await response.json();
        
        }catch{
            alert('Erro na requisição da tarefas.');
            throw error
        
        }
    
    },
    async criarNovaTarefa(tarefa){
        try{ 
            const response = await fetch('http://localhost:3000/tarefas', {
                mtehod: 'POST',
                headers: {
                    'content-type': 'applicatin'
                },
                body: JSON.stringify(tarefa) 
            });
        

            return await response.json();
        
        }catch{
            alert('Erro na requisição da tarefas.');
            throw error
        
        }
    
    }

}
export default api