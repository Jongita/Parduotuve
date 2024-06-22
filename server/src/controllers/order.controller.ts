import { pool } from "../db/connect";
import { Order } from "../models/order";


export class OrderController{
    static async getAll( req:any, res:any){
        
        if (req.user.type>2){
            return res.status(400).json({
                text:"Neturite teisiu"
            })
        }
        const sql="SELECT * FROM orders";
        const [result]=await pool.query<Order[]>(sql);
        res.json(result);
    }

    static async getOrder( req:any, res:any){
    
        const sql="SELECT * FROM orders WHERE id=?";
        const [result]=await pool.query<Order[]>(sql, [req.params.id]);
        if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result[0]);
        }
       
    }

      static async insert(req:any, res:any){
        const order:Order=req.body;

        const sql="INSERT INTO orders (name, surname) VALUES ( ?, ? )";
        const [result, fields]=await pool.query(sql, [order.name, order.surname]);
        const insertId=(result as any).insertId;

        order.products.forEach(async (product)=>{
            const sql2="INSERT INTO orders_products (order_id, product_id, count) VALUES (?, ?, ?)";
            await pool.query(sql2, [insertId, product.productId, product.count] );
        });
        
        res.status(201).json({
            "success":true
        })
    }
}