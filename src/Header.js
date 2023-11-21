import React from 'react'
import { Container , Row , Col , Button} from 'reactstrap'
import headerimg from './headerimg.png'

const Header = () => {
  return (
    <div className='row1'>
        <Container >
            <Row >
                <Col className='my-5 col1'>
                  <div className='col11'>Empowering Conversations</div> 
                  <div className='col1-color'>Click, Connect, Inspire!</div>
                  <br/><br/>
                  <p className='para'>Empower seamless collaboration without boundaries. Our video conferencing app delivers seamless connections for productive meetings anytime, anywhere. Empowering teams to communicate, collaborate, and succeed globally. High-quality video, interactive tools, and seamless connections. </p>
                  <br/>
                  <div className='btn'>
                  <Button href="Video"
                    color="primary"
                    size="lg"
                  >
                    Click To Join A Meeting
                  </Button>
                  </div>
                  <br/><br/><br/><br/><br/><br/><br/>
                </Col>
                <Col className='col2'>
                <img className='headimg'src={headerimg}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header