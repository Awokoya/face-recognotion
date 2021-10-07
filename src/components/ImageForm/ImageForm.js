import './imageForm.css';


const ImageForm = () => {
  return (
   <div>
     <p className='f3'>
       {'Brain will detect images. Give it a try :)'}
     </p>
     <div className= 'center'>
       <div className = 'form center pa4 br3 shadow-5'>
       <input className='f4 pa2 w-70 center' type='text' />
       <button className='f4 grow w-30 link ph3 pv2 dib white bg-light-purple'>Detect</button>
       </div>
     </div>
   </div>
  )
}

export default ImageForm;