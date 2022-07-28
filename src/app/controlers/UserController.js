import User from '../models/User';

module.exports = {
    async store(req, res){},
    async store(req, res){},
    async store(req, res){},
    async store(req, res){},
    async store(req, res){},
    
    async list(req, res){
        const userList = await User.findAll();
        
        return res.status(200).json({
            timestamp: Date.now(),
            ok: true,
            data: userList
        })
    },
    async delete(req,res){}    
}