import React,{useState} from 'react';
import '../components/css/Courses.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'; 
function CourseItem(){

    const [modal, setModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);

    
    return(
        <>
        <div className='courseContainer'>
            <h1>Course 1</h1>
            <div className='courseInfo'>
                <span>Temirlan Amanzholov</span>
                <span>41 enrolled out of 100</span>
            </div>
            <Button onClick={toggle}>Enroll</Button>
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Course Enrollment</ModalHeader>
            <ModalBody>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, asperiores? Tenetur impedit dolorem dolore sint, quas quasi atque fugit pariatur voluptatibus veritatis aspernatur tempore non assumenda iusto accusamus commodi deleniti!</ModalBody>
            <ModalFooter>
                <Button onClick={toggle}>Save</Button>
            </ModalFooter>
            </Modal>
            
        </div>

        </>
    )
}
export default CourseItem;