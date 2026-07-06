import { Pool, QueryResult } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("sslmode=require")
    ? { rejectUnauthorized: false }
    : undefined,
});

export type ProductRecord = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string | null;
};

export async function query<T = any>(sql: string, params?: unknown[]): Promise<QueryResult<T>> {
  return pool.query(sql, params);
}

export async function initDb() {
  await query(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      price INTEGER NOT NULL,
      image TEXT NOT NULL,
      category TEXT
    )
  `);
}

export async function getProducts(): Promise<ProductRecord[]> {
  await initDb();
  const result = await query<ProductRecord>(`
    SELECT id, name, price, image, category
    FROM products
    ORDER BY name
  `);
  return result.rows;
}

export async function getProductById(id: string): Promise<ProductRecord | null> {
  await initDb();
  const result = await query<ProductRecord>(
    `SELECT id, name, price, image, category FROM products WHERE id = $1`,
    [id],
  );
  return result.rows[0] ?? null;
}

export async function createProduct(product: ProductRecord): Promise<ProductRecord> {
  await initDb();
  await query(
    `
      INSERT INTO products (id, name, price, image, category)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id) DO UPDATE
      SET name = EXCLUDED.name,
          price = EXCLUDED.price,
          image = EXCLUDED.image,
          category = EXCLUDED.category
    `,
    [product.id, product.name, product.price, product.image, product.category],
  );
  return product;
}
