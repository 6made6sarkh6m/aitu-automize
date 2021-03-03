import React,{useState, useEffect} from 'react';
import BarChart from '../components/Charts/BarChart';
import DoughnutChart from '../components/Charts/DoughnutChart';
import ProgressBar from '../components/ProgressBar';
import AssignmentList from '../components/AssignmentList';
import '../components/css/Home.css';
function Home({student}){
    
    const [assignments, setAssignments] = useState({
        assign :[]
    });

    useEffect(()=>{
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
                    <h1>{student.courseNumber}</h1>
                    <h3>COURSE</h3>
                </div>
                <div className="prof_rep">
                    <h1>{student.firstname_en} {student.lastname_en}</h1>
                    <div className='image'>
                        <img src={`data:image/jpeg; base64, ${student.photo}` } alt=''></img>
                    </div>
                </div>
                <div className="edu_prog">
                    <h1>SE-2021</h1>
                    <h3>GROUP</h3>
                </div>
            </div>
            <div className='progress_container'><ProgressBar></ProgressBar></div>
            <div className='chart_wrapper'>
                <div className='barchart'>
                <BarChart></BarChart>
                </div>
                <div className='dough'>
                <DoughnutChart></DoughnutChart>
                
                </div>
            </div>
            <div className='assignment_container'>
                <AssignmentList assignments={assignments.assign}></AssignmentList>
            </div>
            <div className='footer'>
                <div className='text-center'><span className='footer-text'>AITU Digital University 2020</span></div>
            </div>
        </div>
    )
}

export default Home;