import { drizzle } from "drizzle-orm/d1";
import { schema } from "../../../drizzle/schema";

export const getDb = (db: D1Database) => drizzle(db, { schema });
