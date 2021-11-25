import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./create-user.dto";
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserService {
    
    constructor(@InjectRepository(User) 
    private userRepo: Repository<User>) {}
    

    async addUser(user: CreateUserDto) : Promise<User> {
        const hashPassword = await bcrypt.hash(user.password, 10);
        let newUser = new User();
        newUser = {
            ...user,
            password: hashPassword
        }
        const u = await this.userRepo.save(newUser);
        return u;
    }
}