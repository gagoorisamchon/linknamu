import { MongoClient } from "mongodb";

export type ClickDoc = {
  _id: string; // 링크 id
  count: number;
};

const uri = process.env.MONGODB_URI;

// 개발 중 핫 리로드로 연결이 계속 늘어나지 않도록 전역에 한 번만 만들어 둔다
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요.");
  }
  globalForMongo._mongoClientPromise ??= new MongoClient(uri).connect();
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection() {
  const client = await getClient();
  return client.db().collection<ClickDoc>("clicks");
}
