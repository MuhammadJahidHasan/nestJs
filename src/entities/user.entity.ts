import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//import { Role } from "src/users/create-user.dto";

@Entity()
export class User {

     @PrimaryGeneratedColumn()
     id: number;
     
     @Column()
     name: string;

     @Column()
     email: string;

     @Column() 
     mobile: string;

     @Column()
     password: string;

     //role: Role[];

}