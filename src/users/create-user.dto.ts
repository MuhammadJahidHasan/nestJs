import { IsEmail, IsEnum, IsMobilePhone, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum Role {
    admin,
    user
}

export class CreateUserDto {

     id: number;
     @IsString()
     @IsNotEmpty()
     name: string;

     @IsEmail()
     email: string;

     @IsMobilePhone()
     mobile: string;

     @IsString()
     @IsNotEmpty()
     password: string;

    // @IsOptional()
    // @IsEnum(Role, { each: true })
    // role: Role[]

}