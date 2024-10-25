import React, {useState} from 'react'
import '../App.css'

const EduToggle = ({title, Institution, Session, Graduation, Result, Board, Group, Department  }) => {

     const [isOpen, setIsOpen] = useState(false);
     
     const handleToggle = () => {
       setIsOpen(!isOpen);
     };

  return (
    <div className='edToggle'>
      <button onClick={handleToggle} className='edButton'>
        {title} {isOpen ? <span>&#9660;</span> : <span>&#9650;</span>}
      </button>
      <div className='edInfo'>
        {isOpen && <p className='description'>{Institution}</p>}
        {isOpen && <p className='description'>{Session}</p>}
        {isOpen && <p className='description'>{Department}</p>}
        {isOpen && <p className='description'>{Board}</p>}
        {isOpen && <p className='description'>{Group}</p>}
        {isOpen && <p className='description'>{Graduation}</p>}
        {isOpen && <p className='description'>{Result}</p>}
      </div>
    </div>
  );
}

export default EduToggle