import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import phone from "../../images/rep-img-1.png";
import './page1Card3.css'

export default function Page1Card3() {
  return (<Box className='catalog1-page1-card3-container'>
       <Box 
       >
        <Typography 
        component="div"
        variant="h5"
        sx={{marginBottom: 5, fontWeight: '500'}}
        >Не нашли свою поломку?
        </Typography>
        <Typography 
        component="div"
        variant="p"
        >Наши специалисты бесплатно вас проконсультируют и ответят на все вопросы
        оставьте заявку
        </Typography>
       </Box>

       <img alt='phone' src={phone} width="100%"/>
       <Button
          sx={{
            backgroundColor: "blue",
            borderRadius: "25px 0 ",
            padding: "20px 30px",
            fontSize: 20,
            color: "#fff",
            marginY: 4,
            ":hover": {
              background: "blue",
            },
          }}
        >
          Заказать звонок
        </Button>
  </Box>
  )
}
