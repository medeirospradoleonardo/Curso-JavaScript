export default function handler(req, res){

    if(req.method === "GET"){
        handlerGet(req, res)
    }else{
        res.status(405).send()
    }
}

function handlerGet(req, res){
    res.status(200).send().json({
        id: 3,
        nome: 'Maria',
        email: 'mariamariamaria@xcfmail.com'
    })
}