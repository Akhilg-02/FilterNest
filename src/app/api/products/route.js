export async function GET() {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
  
      if (!response.ok) {
        throw new Error("Failed to fetch products from external API")
      }
  
      const products = await response.json()
  
      // You can transform the data here if needed
      const transformedProducts = products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating,
      }))
  
      return Response.json(transformedProducts)
    } catch (error) {
      return Response.json({ error: "Failed to fetch products" }, { status: 500 })
    }
  }
  
  