import { useContext, useEffect, useState } from 'react'
import { TipContext } from '../context/tipContext'

const inputs = [
  {
    id: 1,
    text: 5,
  },
  {
    id: 2,
    text: 10,
  },
  {
    id: 3,
    text: 15,
  },
  {
    id: 4,
    text: 25,
  },
  {
    id: 5,
    text: 50,
  },
]

const Form = () => {
  const { price, setPrice, percentage, setPercentage, people, setPeople } =
    useContext(TipContext)

  const [customValue, setCustomValue] = useState('')

  const handlePriceInput = (e) => {

    const numberValue = Number(e.target.value)
    if(numberValue === 0) {
      setPrice(null)
    } else {
      setPrice(numberValue)
    }
  }
  const handleInput = (e) => {
    const numberValue = Number(e.target.value)
    setPercentage(numberValue)
  }
  const handlePeopleInput = (e) => {
    const numberValue = Number(e.target.value)
    if(numberValue === 0) {
      setPeople(null)
    } else {
      setPeople(numberValue)
    }
    
  }

  return (
    <div className='flex flex-col w-full sm:w-1/2 gap-6'>
      <div className='flex flex-col'>
        <span>Bill</span>
        <div className='flex relative items-center'>
          <label htmlFor='' className='absolute pl-4'>
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='17'>
              <path
                fill='#9EBBBD'
                d='M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z'
              />
            </svg>
          </label>
          <input
            className='w-full bg-gray-100 pr-4 pl-10 text-very-dark-cyan text-2xl rounded py-1'
            type='number'
            placeholder=''
            value={price === null ? '' : price}
            onChange={(e) => handlePriceInput(e)}
          />
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <span>Select Tip %</span>
        <div className='grid grid-rows-2 grid-cols-3 gap-2'>
          {inputs.map((input) => (
            <div
              key={input.id}
              className={`transition-all rounded w-full h-full py-2 text-2xl hover:bg-cyan-200 hover:text-very-dark-cyan font-bold ${
                percentage == input.text && customValue == ''
                  ? 'bg-strong-cyan hover:bg-strong-cyan text-very-dark-cyan'
                  : ' bg-very-dark-cyan text-white'
              }`}
            >
              <input
                className='hidden'
                type='radio'
                name='tip'
                id={input.id}
                value={input.text}
                onClick={(e) => {
                  handleInput(e)
                  setCustomValue('')
                }}
              />
              <label
                className='flex w-full items-center justify-center '
                htmlFor={input.id}
              >
                {input.text}%
              </label>
            </div>
          ))}

          <input
            type='number'
            name='tip'
            id={6}
            placeholder='Custom'
            value={customValue}
            onChange={(e) => {
              const numberValue = Number(e.target.value)
              setCustomValue(numberValue)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setPercentage(customValue)
              }
            }}
            onBlur={() => setPercentage(customValue)}
            className='w-full text-center py-2 text-2xl rounded text-very-dark-cyan'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <span>Number of people</span>
        <div className='flex relative items-center'>
          <label htmlFor='' className='absolute pl-4'>
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='17'>
              <path
                fill='#9EBBBD'
                d='M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z'
              />
            </svg>
          </label>
          <input
            className='w-full bg-gray-100 pr-4 pl-10 text-very-dark-cyan text-2xl rounded py-1'
            type='number'
            value={people === null ? '' : people}
            onChange={(e) => handlePeopleInput(e)}
          />
        </div>
      </div>
    </div>
  )
}

export default Form
