import React from 'react'
import {Card,Button, Container,Row, Col} from 'react-bootstrap'
// import {axios}?
import {useState, useEffect} from 'react'
import axios from 'axios'



function NewsList() {
  const [newsList, setNewsList] = useState([])
  useEffect( () => {
     const  getNews = async () => {
        try {
          const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9067d02ace5046d194c27c4b87f1f9e6");
          setNewsList(res.data.articles);
          
        }
        catch(err){

          console.log(err);
        }
     }
     getNews()
  },[])

 

  return (
    <>
      <Container>
        <Row>
          {newsList.map((singlenews,index) => {
            return(<Col md= {4} key = {index} className = "mt-4">
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src= {singlenews.urlToImage ? singlenews.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9DN9irguvWfsYs5L3jiXISDvycmclpp1HQ&usqp=CAU"}  alt = "image"/>
                  <Card.Body>
                    <Card.Title>{singlenews.source.name}</Card.Title>
                    <Card.Title>{singlenews.title.slice(0,50) + "..."}</Card.Title>
                    <Card.Text>
                      {singlenews.description && singlenews.description.length>180 ? singlenews.description.slice(0,180) + "...": singlenews.description}
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>)
          })}
          
        </Row>
      </Container>
      
    </>
  )
}

export default NewsList
