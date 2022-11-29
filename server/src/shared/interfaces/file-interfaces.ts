export interface iFile {
  encoding: string;
  buffer: Buffer;
  fieldname: string;
  mimetype: string;
  originalname: string;
  size: number;
}
