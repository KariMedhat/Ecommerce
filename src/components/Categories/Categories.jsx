import React from 'react'
import { Container } from './styles'
import { categories } from '../../data'
import CategoryItem from '../CategoryItem/CategoryItem'

const Categories = () => {
  return (
    <Container>
        {categories.map(item =>(
          <CategoryItem key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Categories