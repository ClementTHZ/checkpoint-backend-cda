import "reflect-metadata"; 
import { DataSource } from "typeorm"; 
import Country from "../entities/Country";

const dataSource = new DataSource({
    type: "sqlite", 
    database: "checkpoint-cda",
    entities: [Country], 
    synchronize: true, 
    logging: ["query", "error"] 
});

export default dataSource; 