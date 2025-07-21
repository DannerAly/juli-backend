import { IsBoolean, IsISO8601, IsString } from "class-validator";

export class CreatePlantillaDto {

    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;
    
    @IsString()
    contenido_json: string;
    
    @IsBoolean()
    activo: boolean;
}
