import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import {NavLink} from "react-router-dom";

export const Home = () => {
    const [data, setdata] = useState([]);
    const getAlldata = async () => {
        const res = await fetch('http://1to21.com/api/getusers', {
            // method:'GET',  
            // headers: {
            //     'Content-Type': 'application/json',
            // },
        });
        const data = await res.json();
        setdata(data)

    };
    useEffect(() => {
        getAlldata();
    }, [])


    const deleteuser = async (id) => {
        const res2 = await fetch(`http://1to21.com/api/deleteuser/${id}`,
            {
                method:'DELETE',
                headers: {
                    'Content-Type':'application/json',
                    
                },
            });

        const deletdata = await res2.json();
        // console.log(deletdata);
        if (res2.status === 422 || !deletdata) {
            console.log('error');
            alert('error')
        }else {
            toast.success("user Deleted !!!" , {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            getAlldata();
        }
    };










    return (

        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <span className="nav-color">
                            <NavLink to='/register'>ADD USER</NavLink>
                        </span>
                        <table class="min-w-full">
                            <thead class="border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        ID
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Work
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Mobile
                                    </th>
                                 
                                </tr>
                            </thead>
                            <tbody>
{data.map((item,index)=>(
  <tr class="border-b">
  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
{item.name}
  </td>
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
{item.email}
  </td>
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
{item.work}
  </td>
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
{item.mobile}
  </td>
  
  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <NavLink to={`view/${item._id}`}>
            <button className="btn-color">View</button>
            {" " + ""}
            
        </NavLink>
        <NavLink to={`edit/${item._id}`}>
            <button className="btn-color">Edit</button>
            {" "}
        </NavLink>
        <NavLink>
            
            <button className="btn-color" onClick={()=>deleteuser(item._id)}>Delete</button>
        </NavLink>
  </td>
  
</tr>
))}
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}