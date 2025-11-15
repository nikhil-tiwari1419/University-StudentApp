import React from 'react'
function Card(props) {
    return (
        <div>
        <div className='flex flex-col items-center pt-10'>
            <img className='h-60 w-60 rounded-xl ' src={props.image} alt={props.alt}/>
            <h3 className='text-xl text-blue-500'>{props.user}</h3>
            <h5 className='sm:font-thin md:font-light hover:text-white '>{props.position}</h5>
        </div>
        
        </div>
    )
}

export default Card;