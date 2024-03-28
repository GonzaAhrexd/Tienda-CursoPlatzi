import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
function Home() {

  const [items, setItems] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])

  return (
    <Layout >
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'> 

      {
        
        items?.map(item => (
          <Card
          key={item.id}
          data={item}
          />
          ))
        }
        </div>
    
    </Layout>
  )
}

export default Home