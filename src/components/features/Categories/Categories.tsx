import React, { useEffect, useState } from 'react'

type Category = string

const Categories = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      const categories = products.map(item => item.category)
      setCategories(Array.from(new Set(categories)))
    }
    fetchCategories()
  }, [])

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
        </div>
      ))}
    </div>
  )
}

export default Categories
