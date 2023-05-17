// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {backend_golang} from '../models';

export function ConvertModel(arg1:string,arg2:string,arg3:string):Promise<string>;

export function DownloadFile(arg1:string,arg2:string):Promise<void>;

export function FileExists(arg1:string):Promise<boolean>;

export function ListDirFiles(arg1:string):Promise<Array<backend_golang.FileInfo>>;

export function OpenFileFolder(arg1:string):Promise<void>;

export function ReadFileInfo(arg1:string):Promise<backend_golang.FileInfo>;

export function ReadJson(arg1:string):Promise<any>;

export function SaveJson(arg1:string,arg2:any):Promise<void>;

export function StartServer(arg1:number):Promise<string>;
