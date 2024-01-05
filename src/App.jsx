import Form from './components/Form'
import Display from './components/Display'

function App() {
  return (
    <>
      <main className='min-h-screen max-w-screen-xl mx-auto flex justify-center items-center font-space font-bold text-grayish-cyan '>
        <div className='flex flex-col m-6 lg:m-0 sm:flex-row p-8 gap-6 bg-white rounded-[25px] w-[800px]'>
          <Form />
          <Display />
        </div>
      </main>
    </>
  )
}

export default App
