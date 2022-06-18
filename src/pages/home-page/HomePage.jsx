import React, { useContext } from 'react'
import { AppContext } from '../../AppConext'
import Kross from '../../components/Kross/Kross'
import Search from '../../components/Search/Search'

const HomePage = () => {
  const { data } = useContext(AppContext)
  return (
    <div>
      <Search />
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {data.map(item => (
          <Kross item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage