import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";

export class RegisterAuthDto extends LoginAuthDto{

    @IsString()
    @IsNotEmpty()
    nombre: string;
    
    @IsString()
    @IsOptional()
    apellido?: string;
}