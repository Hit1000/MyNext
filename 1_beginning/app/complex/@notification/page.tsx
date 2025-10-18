import Link from 'next/link'

function notification() {
  return (
    <div className='items-center text-center w-full h-full'>
      <div>notification</div>
      <Link className='text-blue-500 hover:underline' href="/complex/art">Default</Link>
    </div>
  )
}

export default notification