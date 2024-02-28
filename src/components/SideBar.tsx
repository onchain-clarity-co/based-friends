export default async function SideBar() {
	return (
    <div className="w-1/6 p-2" style={{color: '#FFF', marginTop: '20px', marginLeft: '100px'}}>
         
         <ul className="Search" style={{ borderBottom: '1px solid #FFF', paddingTop: '0.1rem', paddingBottom: '0.1rem' }}>
                <li className="text-lg leading-none ml-2 mb-1">
                    <input 
                        type="search" 
                        placeholder="Search..." 
                        style={{ 
                            color: '#000', 
                            padding: '0.2rem', 
                            borderRadius: '5px',
                            width: '90%', 
                            border: 'none', 
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
                        }}
                    />
                </li>
            </ul>

            <ul className="Filter" style={{ borderBottom: '1px solid #FFF', paddingTop: '0.1rem', paddingBottom: '0.1rem' }}> 
                <li className="text-lg leading-none ml-2 mb-1 bg-transparent border-none text-white cursor-pointer hover:text-lightblue active:text-darkblue">
                    <button type="button" 
                        className="bg-transparent border-none text-white cursor-pointer hover:text-lightblue active:text-darkblue">
                        Following
                    </button>
                </li>
                <li className="text-lg leading-none ml-2 mb-1 bg-transparent border-none text-white cursor-pointer hover:text-lightblue active:text-darkblue">
                    <button type="button" 
                        className="bg-transparent border-none text-white cursor-pointer hover:text-lightblue active:text-darkblue">
                        Mutual
                    </button>
                </li>
                <li className="text-lg leading-none ml-2 mb-1 bg-transparent border-none text-white cursor-pointer hover:text-lightblue active:text-darkblue">
                    <button type="button" 
                        className="bg-transparent border-none text-white cursor-pointer hover:text-lightblue active:text-darkblue">
                        Follows Me
                    </button>
                </li>
              </ul> 
              
           

        <ul className="Sort-Radio" style={{ display: 'flex', alignItems: 'center', paddingTop: '0.2rem' }}>
          <li className="text-md leading-none ml-2 mb-1">
            <label>
             <input type="radio" name="sort" value="most" />
               Most
            </label>
           </li>
           <li className="text-md leading-none ml-2 mb-1">
             <label>
               <input type="radio" name="sort" value="least" />
                Least
             </label>
           </li>
        </ul>

        <ul className="Sort">
          <li> <button type="button" className="text-lg leading-none ml-2 mb-1"> Interactions</button> </li>
          <li> <button type="button" className="text-lg leading-none ml-2 mb-1"> Recently Casted</button> </li>
          <li> <button type="button" className="text-lg leading-none ml-2 mb-1"> Recently Onchain</button> </li>
        </ul>
      </div>
	)
}