import React, {useState, useEffect} from "react";

import CoursesList from "./CoursesList";
import courseStore from "../stores/courseStore";
import {Link} from "react-router-dom";
import {loadCourses} from "../actions/courseActions";

function CoursesPage() {
    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if(courseStore.getCourses().length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange);
    },[]);

    function onChange(){
        setCourses(courseStore.getCourses());
    }
    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course"> Add Course </Link>
            <CoursesList courses={ courses} />
        </>
    );
}

export default CoursesPage;