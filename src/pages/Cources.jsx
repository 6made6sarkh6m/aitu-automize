import React,{useState,useEffect} from 'react'
import '../components/css/Courses.css';
import {ListGroup, ListGroupItem, Badge, Button,  Input,  Row, Col, Spinner} from 'reactstrap';
const divideSelectsToGroup = (inputs) => {
    return inputs.reduce((total, input) => {
      if(input.groupId){
        if(total[input.groupId])
          total[input.groupId].push(input)
        else{
          total[input.groupId] = [];
          total[input.groupId].push(input)}
        return total
      }
      else return total;
    }, {})
  }


function Cources({token}){
  const [courseItem, setCourseItem] = useState();
  const [EP, setEP] = useState([]);
  const [EduProgramId, setEduProgramId] = useState();
  const [basicDisciplines, setBasicDiscipline] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  const [divided, setDivided] = useState();
  

  
  
  const changeEduProgram=(e)=>{
    setEduProgramId(e.target.value);
    
    
  }
  const handleChange=(e)=>{
    setCourseItem(e.target.value);
    console.log(courseItem);
    
  }
  const getEP =  ()=>{
    // const request = await fetch(`https://tomcat.astanait.edu.kz:8020/choise-cource/choiceEducProgr/list?idStudent=${token}`);
    // const data = await request.json();
    //  setEP(data);
    fetch(`https://tomcat.astanait.edu.kz:8020/choise-cource/choiceEducProgr/list?idStudent=${token}`).then(response=>response.json()).then(data=>setEP(data));
    console.log(EP); 
    
    
  }
  const getDisciplinesByEP= ()=>{
    // const request = await fetch(`https://tomcat.astanait.edu.kz:8020/choise-cource/choicecource/list?idStudent=${token}&idEP=${EduProgramId}`);
    // const data = await request.json();
    fetch(`https://tomcat.astanait.edu.kz:8020/choise-cource/choicecource/list?idStudent=${token}&idEP=${EduProgramId}`).then(data=>data.json()).then(data=>setBasicDiscipline(data));
    
    //  setBasicDiscipline(data);
    
    
    
  }


  const saveEP =  async (e)=>{
    e.preventDefault();
    setLoading(true);
    fetch(`https://tomcat.astanait.edu.kz:8020/choise-cource/choiceEducProgr/saveep?`,{
      method:"POST",
      headers: {
        "Content-type":"application/x-www-form-urlencoded"
      },
      body:`idep=${EduProgramId}&idStudent=${token}`
    }).then(data=>{
      console.log(data);
      if(data.ok){
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      }
      
    }).catch(err=>console.log(err))
  
    getDisciplinesByEP();
    
  }

  const Enroll=(e)=>{
    e.preventDefault();
    setLoading(true);
    fetch(`https://tomcat.astanait.edu.kz:8020/choise-cource/choicecource/saveSubject?`,{
      method:"POST",
      headers:{
        "Content-type":"application/x-www-form-urlencoded"
      },
      body:`idCource=${courseItem}&idStudent=${token}&idGroup=${EduProgramId}`
    }).then(data=>{
      console.log(data);
      if(data.ok){
        getDisciplinesByEP();
        setTimeout(()=>{
          setLoading(false);
        },1000);
      }
    })
    
  }

  useEffect( ()=>{
      getEP();
    },[]);

  useEffect(()=>{
    setDivided(divideSelectsToGroup(basicDisciplines.filter(subj => subj.groupId != 0)));
    getEP();
    console.log(EduProgramId);
    console.log(basicDisciplines);
  },[basicDisciplines]);
    
    
    return(
      
      
      <ListGroup style={{width:80+'%', margin:'10vh auto'}}>
        <h2 style={{textAlign:'center'}}>Select your educational program vector for 2021-2022 academic year</h2>
        <ListGroupItem style={{margin:'5vh 0 0 0'}}>
          <Row>
            <Col xs="4">
            <Input type='select' onChange={changeEduProgram}>
            <option>...</option>
            {
              EP.map(data=>{

                return <option key={data.courceTitle} value={data.id} disabled={data.choice}>{data.name} {data.choice ? " - already selected": null}</option>
                
              })
            }
          </Input>
            </Col>
            <Col xs="auto">
            <Button onClick={saveEP}>Select</Button>
            </Col>
            <Col xs="2">
              {
                isLoading?

                <Spinner size='sm' color='secondary'></Spinner>
                
                :
                <></>
              }
              </Col>
          </Row>
        </ListGroupItem>
        <h3 style={{margin:'5vh 0 0 0'}}>General education disciplines </h3>
        <ListGroupItem>
        <Row>
            <Col xs='4'><h4>Course title</h4></Col>
            <Col xs='2'><h4>Trimester</h4></Col>
            <Col xs='5'><h3>Course Description</h3></Col>
          </Row>
          {
            basicDisciplines.filter(subj => subj.groupId == 0).length===0?
            <></>
            :
            <Row>
              <Col xs='4'>
                {basicDisciplines.filter(subj => subj.groupId == 0).map(data=>{
                  return <Input disabled placeholder={data.courceTitle} id={data.courceTitle}  style={{margin:'1vh 0 0 0'}}></Input>
                })}
              </Col>
              <Col xs='2'>
                {basicDisciplines.filter(subj => subj.groupId == 0).map(data=>{
                  return <Input disabled placeholder={data.trimestr} id={data.id}  style={{margin:'1vh 0 0 0'}}></Input>
                })}
              </Col>
              <Col xs='5'>
                {basicDisciplines.filter(subj=>subj.groupId == 0).map(data=>{
                  return <p key = {data.id}>{data.description}</p>
                })}
              </Col>
            </Row>
          }
        </ListGroupItem>
        <h3 style={{margin:'5vh 0 0 0'}}>Course electives</h3>
        <ListGroupItem>
          <Row>
            <Col xs='4'><h4>Course title</h4></Col>
            <Col xs='2'><h4>Trimester</h4></Col>
          </Row>
        {
          
          basicDisciplines.filter(subj => subj.groupId != 0).length===0?
            <></>
            :
            Object.keys(divided).map(select=>{
              return  <Row>
              <Col xs="4" style={{margin:'2vh 0 0 0'}}>
              <Input type='select' onChange={handleChange}>
                <option>...</option>
                {
                  divided[select].map(data=>{
                    return <option disabled={data.selected} key={data.courceTitle} value={data.id}>{data.courceTitle} {data.selected ? " - already selected" : null}</option>
                  })
                }
              </Input>
  
              </Col>
              <Col xs='2'style={{margin:'2vh 0 0 0'}}>
              {divided[select].map(data=>{
                    if(data.id == courseItem){
                      return <p>{data.trimestr}</p>
                    }else{
                      return <></>
                    }
                    
                  })}
              </Col>
              <Col xs='auto'  style={{margin:'2vh 0 0 0'}}>
                <Button onClick={Enroll}>Enroll</Button>
              
              </Col>
            </Row>
            })
           
        }
        </ListGroupItem>
      </ListGroup>
      
    )
}

export default Cources