import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateAudioDto {

    @IsNumber()
    usuario_id: number;

    @IsNumber()
    plantilla_id: number;

    @IsString()
    url_audio: string;

    @IsBoolean()
    procesado: boolean;

}
