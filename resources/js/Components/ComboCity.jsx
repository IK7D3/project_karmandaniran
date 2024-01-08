import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import React from 'react'

const people = [
    
  ]

const ComboCity = ({cities}) => {
    const [selectedPerson, setSelectedPerson] = useState(cities[0].title)
    const [query, setQuery] = useState('')
  
    const filteredPeople =
      query === ''
        ? cities
        : cities.filter((person) => {
            return person.title.includes(query)
          })
  
    return (
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)} 
        className="w-full px-5 text-right text-xs mt-2
        text-gray-900 border border-teal-500 
        rounded-lg bg-gray-50 focus:ring-blue-500
         focus:border-blue-500 dark:bg-gray-700 
         dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500 "/>
        <Combobox.Options className="bg-white p-2 rounded-md mt-1 w-full max-h-56 overflow-scroll ">
          {filteredPeople.map((person) => (
            <Combobox.Option className="py-2 border-b-2 cursor-pointer" key={person.id} value={person.title}>
              {person.title}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    )
}

export default ComboCity


  
