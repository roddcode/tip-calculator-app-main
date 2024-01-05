import { useContext, useEffect, useState } from 'react'
import { TipContext } from '../context/tipContext'

const Display = () => {
  const { price, setPrice, percentage, setPercentage, people, setPeople } =
    useContext(TipContext)

  const [totals, setTotals] = useState({
    total: 0,
    totalForPeople: 0,
    tipTotal: 0,
    tipForPeople: 0,
  })

  const handleReset = () => {
    setPrice(null)
    setPercentage(0)
    setPeople(null)
  }

  useEffect(() => {
    const newTotal = (price * percentage) / 100 + price
    const newTotalForPeople = newTotal / people
    const newTipTotal = (price * percentage) / 100
    const newTipForPeople = newTipTotal / people

    setTotals({
      total: newTotal,
      totalForPeople: newTotalForPeople,
      tipTotal: newTipTotal,
      tipForPeople: newTipForPeople,
    })

    console.log(newTotal, newTotalForPeople, newTipTotal, newTipForPeople)
  }, [price, percentage, people])

  return (
    <div className='flex flex-col w-full sm:w-1/2 px-6 py-8 bg-very-dark-cyan rounded-[12px] gap-4'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-white text-lg font-semibold'>Tip Amount</p>
          <span className='text-sm text-gray-400'>/ person</span>
        </div>
        <div>
          <p className='text-4xl text-strong-cyan font-bold'>
            ${((totals.tipForPeople.toFixed(2) === 'NaN' || totals.tipForPeople.toFixed(2) === 'Infinity') ? 0 : totals.tipForPeople).toFixed(2)}
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div>
          <p className='text-white text-lg font-semibold'>Total Amount</p>
          <span className='text-sm text-gray-400'>/ person</span>
        </div>
        <div>
          <p className='text-4xl text-strong-cyan font-bold'>
            ${((totals.totalForPeople.toFixed(2) === 'NaN' || totals.totalForPeople.toFixed(2) === 'Infinity') ? 0 : totals.totalForPeople).toFixed(2)}
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div>
          <p className='text-white text-lg font-semibold'>Tip Amount</p>
          <span className='text-sm text-gray-400'>/ total</span>
        </div>
        <div>
          <p className='text-4xl text-strong-cyan font-bold'>
            ${totals.tipTotal.toFixed(2)}
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div>
          <p className='text-white text-lg font-semibold'>Total Amount</p>
          <span className='text-sm text-gray-400'>/ total</span>
        </div>
        <div>
          <p className='text-4xl text-strong-cyan font-bold'>
            ${totals.total.toFixed(2)}
          </p>
        </div>
      </div>
      <div>
        <button
          className='w-full rounded bg-strong-cyan text-very-dark-cyan hover:bg-cyan-200 text-2xl py-2'
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default Display
