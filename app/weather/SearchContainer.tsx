'use client'
import React, { useState } from 'react'
// Components
import Search from '../components/Search/Search'

const SearchContainer = ({
  handleSearchLocation,
}: {
  handleSearchLocation: (text: string) => void
}) => {
  const [text, setText] = useState('')

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    handleSearchLocation(text)
  }
  return <Search setText={setText} text={text} onSubmit={handleOnSubmit} />
}

export default SearchContainer
