import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDocumentosGeneradoDto {
    
    @IsNumber()
    @IsNotEmpty()
    audio_id: number;

    @IsString()
    @IsNotEmpty()
    url_docx: string;

}
