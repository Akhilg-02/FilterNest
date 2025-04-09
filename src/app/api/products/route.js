
export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return Response.json(products);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch products" }),
      { status: 500 }
    );
  }
}
  