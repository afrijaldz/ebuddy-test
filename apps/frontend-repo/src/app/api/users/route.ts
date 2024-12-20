const BASE_URL = 'http://localhost:3333'

export async function GET() {
  const res = await fetch(, {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}