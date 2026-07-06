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

export type OrderRecord = {
  id: string;
  user_email: string;
  customer_name: string;
  address: string;
  phone: string;
  delivery_option: string;
  payment_method: string;
  payment_proof: string | null;
  cart_items: unknown;
  status: string;
  created_at: string;
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

  await query(`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      user_email TEXT NOT NULL,
      customer_name TEXT NOT NULL,
      address TEXT NOT NULL,
      phone TEXT NOT NULL,
      delivery_option TEXT NOT NULL,
      payment_method TEXT NOT NULL,
      payment_proof TEXT,
      cart_items JSONB NOT NULL,
      status TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
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

export async function createOrder(order: OrderRecord): Promise<OrderRecord> {
  await initDb();
  await query(
    `INSERT INTO orders (id, user_email, customer_name, address, phone, delivery_option, payment_method, payment_proof, cart_items, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [
      order.id,
      order.user_email,
      order.customer_name,
      order.address,
      order.phone,
      order.delivery_option,
      order.payment_method,
      order.payment_proof,
      order.cart_items,
      order.status,
    ],
  );

  return order;
}

export async function getOrders(): Promise<OrderRecord[]> {
  await initDb();
  const result = await query<OrderRecord>(`
    SELECT id, user_email, customer_name, address, phone, delivery_option, payment_method, payment_proof, cart_items, status, created_at
    FROM orders
    ORDER BY created_at DESC
  `);
  return result.rows;
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
