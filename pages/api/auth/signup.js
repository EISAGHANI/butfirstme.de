import connectMongo from "@/database/conn";
import Users from "@/models/Schema";
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
    connectMongo().catch(error => res.json({error: "Connection Failed"}))

    //only post method is accepted
    if (req.method === 'POST') {
        if(!req.body) return res.status(400).json({error: "Don't leave any field empty"});
        const {firstName, lastName, email, password} = req.body;

        // check duplicate users
        const checkexisting = await Users.findOne({email});
        if(checkexisting) return res.status(422).json({error: "User already exists"});

        //hash password
        const hashedPassword = await hash(password, 12);

        //create user
        const user = await Users.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            status: true,
            user: user
        });
    } else {
      res.status(500).json({message: "HTTP method not valid only POST is accepted"});
    }
}
