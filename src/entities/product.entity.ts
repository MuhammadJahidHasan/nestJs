

import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    brand: string;

    @Column()
    category: string;
}