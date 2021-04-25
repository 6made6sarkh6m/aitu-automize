import React,{useEffect, useState} from 'react';
import BarChart from '../components/Charts/BarChart';
import DoughnutChart from '../components/Charts/DoughnutChart';
import ProgressBar from '../components/ProgressBar';
import '../components/css/Home.css';
function Home({student}){

    const[studentData, setStudentData] = useState({});
    const [EduProgram, setEduProgram] = useState([]);
    
    


   
   
 const getStudent = async () =>{
     const request =  await fetch(`http://10.1.10.151:7771/api/v1/user/${student}`);
     const data = await request.json();
     setStudentData(data);
     console.log(studentData);
     
 } 


//  const getCurrentEduProgram = async () =>{
//      const request = await fetch(`https://tomcat.astanait.edu.kz:8020/choise-cource/choiceEducProgr/list?idStudent=${student}`);
//      const data = await request.json();
//      setEduProgram(data.filter(edu=>edu.choice == true));

//      console.log(EduProgram);
//  }
 useEffect(async()=>{
    await getStudent();
//         axios.get('https://10.1.11.30:8020/savesnapshotservice/snapshot/announcing?id=1').then(res=>{
//     let results = res.data;    
//     setAssignments(assignments=>{
//         return{...assignments, assign:results}

//     }
//     )
//     console.log(results);

// }).catch(err=>{console.log(err)});
},[])

    
    
    return(
        <div className="home">
            <div className='profile_wrapper'>
                <div className="course_info">
                    <h1>{studentData.courseNumber}</h1>
                    <h3>COURSE</h3>
                </div>
                <div className="prof_rep">
                    <h1>{studentData.firstname_en} {studentData.lastname_en}</h1>
                    <div className='image'>
                         <img src={`data:image/jpeg; base64, ${studentData.photo}` } alt=''></img>
                    </div>
                </div>
                <div className="edu_prog">
                    <h1>{studentData.gpa}</h1>
                    <h3>GPA</h3>
                </div>
            </div>
            <div className='progress_container'><ProgressBar></ProgressBar></div>
            <div className='chart_wrapper'>
                <div className='barchart'>
                {/* <BarChart></BarChart> */}
                </div>
                <div className='dough'>
                {/* <DoughnutChart></DoughnutChart> */}
                
                </div>
            </div>
            <div className='assignment_container'>
                {/* <AssignmentList assignments={assignments.assign}></AssignmentList> */}
            </div>
            <div className='footer'>
                <div className='text-center'><span className='footer-text'>AITU Digital University 2020</span></div>
            </div>
        </div>
    )
}

export default Home;