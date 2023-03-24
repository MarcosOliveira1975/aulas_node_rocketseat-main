const appError = require("../utils/appError") 

class usersController {
    /**
     * UM CONTROLLER TERÁ NO MÁXIMO 5 MÉTODOS.
     * SE TIVER MAIS MÉTODOS, MELHOR SEPARAR!
     * PODE SER QUE UM CONTROLLER TENHA APENAS UM MÉTODO.
     * index - GET para listar vários registros.
     * show - GET para exibir um registro específico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */

    create(request, response) {
        const { name, email, password } = request.body;

        if(!name){
            throw new appError("Nome obrigatório!")
        }
    
        response.json({ name, email, password });
    }
}

module.exports = usersController;