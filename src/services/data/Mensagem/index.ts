import { api } from "../../api"

export interface IMensagem {
    title?: string
    mensagem?: string
}

export interface IResponseMensagem {
    id: number
    user_id: number
    title: string
    mensagem: string
    created_at: string
    user: {
        id: number
        name: string
        email: string
    }
}

class MensagemData {
    index(){
        return api.get<IResponseMensagem[]>('/message')
    }
    store(data: IMensagem) {
        return api.post('/message', data)
    }
}

export default new MensagemData()