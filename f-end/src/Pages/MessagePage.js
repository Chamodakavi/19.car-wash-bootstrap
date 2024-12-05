import React, { useEffect, useState } from 'react'
import Table from '../Components/Table'
import { Container } from 'react-bootstrap'
import axios from 'axios'
const MessagePage = () => {

  const [msg,setMsg] = useState([]);

  useEffect(() => {
    const msgData = async () => {

      try {
        const res = await axios.get("http://localhost:8800/contactus")
        setMsg(res.data)
      } catch (error) { 
        console.log(error);
      }
    }
    msgData()
    
  }, []); 

  console.log(msg)


  return (
    <section className='pt-5'>
     <Container>
          <div className=' mt-5'>
              <h1 className='text-center my-5 text-primary'>Messages page</h1>
              <Table  data={msg} />
          </div>
     </Container>
    </section>
  )
}

export default MessagePage
