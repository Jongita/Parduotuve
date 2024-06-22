import { RowDataPacket } from "mysql2";


export interface Order extends RowDataPacket{
    id?:number;
    name:string;
    surname:string;
    order_date:Date;

    products:{
        productId:number;
        count:number;
    }[]
}