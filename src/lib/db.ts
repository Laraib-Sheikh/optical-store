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

export type UserRecord = {
  id: string;
  email: string;
  password_hash: string;
  role: "customer" | "admin";
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

  await query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL
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

export async function getUserByEmail(email: string): Promise<UserRecord | null> {
  await initDb();
  const result = await query<UserRecord>(
    `SELECT id, email, password_hash, role FROM users WHERE email = $1`,
    [email],
  );
  return result.rows[0] ?? null;
}

export async function createUser(user: UserRecord): Promise<UserRecord> {
  await initDb();
  await query(
    `INSERT INTO users (id, email, password_hash, role) VALUES ($1, $2, $3, $4)` ,
    [user.id, user.email, user.password_hash, user.role],
  );
  return user;
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
