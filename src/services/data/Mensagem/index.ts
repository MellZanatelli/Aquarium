import { api } from "../../api"

export interface IMensagem {
    title: string
    mensagem: string
}

export interface IResponseMensagem {
    id: number
    user_id: number
    title: string
    mensagem: string
    created_at: string
}

class MensagemData {
    index(){
        return api.get<IResponseMensagem[]>('/message')
    }
    store(data: IMensagem) {
        return api.post('/mensagem', data)
    }
}

export default new MensagemData()