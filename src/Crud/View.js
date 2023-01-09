import React, { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"


export const Details = () => {
    const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);
    const { id } = useParams();

    const history = useNavigate();
    const getdata = async () => {
        const res = await fetch(`http://1to21.com/api/getuser/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json();
        //console.log(data);
        if (res.status === 422 || !data) {
            console.log('error');
        }
        else {
            setUserdata(data);
            console.log("get data");
        }
    };
    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {
        const res2 = await fetch(`http://1to21.com/api/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const deletdata = await res2.json();
        if (res2.status === 422 || !deletdata) {
            console.log('error');
        }
        else {
            return toast.success("User Deleted !!", {
                position: toast.POSITION.BOTTOM_RIGHT,
            }),
                history("/");
        }
    }

    return (
        <>
            <span className="nav-colors">
                <Link to={`/edit/${getuserdata._id}`}>Edit</Link><br/>
            </span>
            <span className="nav-colors">
            <button onClick={() => deleteuser(getuserdata._id)}>Delete</button>
            </span>

            

            <div>
                <img src='/image/download.jpg' alt="profile" />
            </div>

            <h3>Name:<span>{getuserdata.name}</span></h3>
            <h3>Age:<span>{getuserdata.age}</span></h3>
            <h3>Email:<span>{getuserdata.email}</span></h3>
            <h3>Mobile:<span>{getuserdata.mobile}</span></h3>
            <h3>Work:<span>{getuserdata.work}</span></h3>
            <h3>Gender:<span>{getuserdata.gender}</span></h3>
            <h3>Location:<span>{getuserdata.location}</span></h3>
        </>
    )
}