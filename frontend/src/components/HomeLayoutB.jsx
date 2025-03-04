import { NavLink } from 'react-router-dom'
import { VerticalCardPost } from './VerticalCardPost'
import { useContext } from 'react'
import { Context } from '../context/Context'

export const HomeLayoutB = ({ posts, apiUrl }) => {
  const { setCateId, setArrowLeft } = useContext(Context)

  return (
    <div className='py-12'>
      <h2 className='text-2xl font-bold mb-4'>{posts[0]?.category_name}</h2>
      <hr />
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {posts.length > 0 &&
          posts.map((item, index) => {
            return (
              <>
                <VerticalCardPost key={index} post={item} noCategory apiUrl={apiUrl} size='small' />
              </>
            )
          })}
      </div>
      <div className='text-center mt-8'>
        <NavLink
          to={`/category/${posts[0]?.category}`}
          onClick={() => {
            setCateId(posts[0]?.category)
            setArrowLeft(true)
          }}
        >
          <button className='px-8 py-3 border border-gray-300 rounded hover:bg-gray-300 font-medium'>ĐỌC THÊM</button>
        </NavLink>
      </div>
    </div>
  )
}
