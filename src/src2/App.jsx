
import { useEffect, useState } from 'react'

import { heroes } from './db'
import SearchHero from './components/searchHero/searchHero'


const App = () => {

  const [hero, setHero] = useState([])
  const [showHero, setShowHero] = useState(false)

  const [searchValue, setSearchValue] = useState(``)

  const [pick, setPick] = useState([])


  const pickHeroinState = (id) => {
    if (pick.length >= 5) {
      return
    }
    setPick((prevPick) => [...prevPick, id])


  }



  useEffect(() => {
    setHero(heroes)
  }, [])







  const basePathImg = '../public/11/'

  // src={`${basePathImg}${h.id.jpg}`}


  return (
    <>
      <div>
        {/* <img src={`${basePathImg}${selectedHero[0].id}.jpg`} /> */}


        <div className="solar-system">
          <div className="main" onClick={() => setShowHero(!showHero)}> </div>


          <div className="pick fiveHero"><img src={`${basePathImg}${pick[4]}.jpg`} />    </div>
          <div className="pick onHero"> <img src={`${basePathImg}${pick[0]}.jpg`} /> </div>
          <div className="pick twoHero"> <img src={`${basePathImg}${pick[1]}.jpg`} /> </div>
          <div className="pick threeHero"><img src={`${basePathImg}${pick[2]}.jpg`} />  </div>
          <div className="pick forHero"> <img src={`${basePathImg}${pick[3]}.jpg`} /> </div>




        </div>



        {showHero ?
          <ul style={{
            height: '100vh',
            position: 'absolute',
            top: '0',
            left: '150px'
          }}>
            <SearchHero searchValue={searchValue} setSearchValue={setSearchValue} />
            {hero.filter(h => {
              if (h.localized_name.toLowerCase().includes(searchValue.toLowerCase())) {
                return true
              } else return false
            })
              .map((h) => <button

                onClick={() => pickHeroinState(h.id)}
                key={h.id}
                title={`${h.localized_name}`}>
                <img src={`${basePathImg}${h.id}.jpg`} alt={`${h.name}`} />
              </button>)}
          </ul> : ''
        }



      </div>
    </>
  )
}

export default App
