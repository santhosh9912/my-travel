import React ,{useEffect,useState}from "react"
import {useNavigate,useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

export const Edit=()=>{
    const navigate=useNavigate()
    const[formdetails,setformdetails]=useState({
        name:'',
        email:'',
        age:'',
        mobile:'',
        work:'',
        location:"",
        gender:'',
    });
    const setdata=(e)=>{
        const{name,value}=e.target;
        setformdetails(previousstate=>{
            return{
                ...previousstate,
                [name]:value,
            };
        });
    };
    const{id}=useParams("");
  

   const getdata = async ()=>{
    const res = await fetch(`http://1to21.com/api/getuser/${id}`,{
        method:"GET",
        headers:{
            "Content-Type" : "application/json",
        },
    });
    const data= await res.json();
    console.log(data);

    if(res.status===422 || !data){
        console.log("error");
    }else{
        setformdetails(data);
        console.log("get data");
    }
   };
   useEffect(()=>{
    getdata();
   },[])
 
 const updateuser=async(e)=>{
    e.preventDefault();
    const{name,email,work,location,mobile,gender,age}=formdetails;

    const res2 = await fetch(`http://1to21.com/api/updateuser/${id}`,{
        method:'PATCH',
        headers:{
            "Content-Type":'application/json',
        },
        body:JSON.stringify({
            name,
            email,
            work,
            location,
            mobile,
            gender,
            age,
        }),
    });
    const data2=await res2.json();
    console.log(data2)

    if(res2.status === 422 || !data2){
        console.log(('fill the data'));
    }
    else{
      return  toast.success("User details Updated",{
            position:toast.POSITION.BOTTOM_RIGHT,
        }),
        navigate("/");
    }
 };
    
    return(
        <div>
             <div className="flex fw justify-center items-center mt-10">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <div>
       
       
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group mb-6">
            <input
              name ="name"
               type ="text"
              class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp123"
              placeholder="Name"
              value={formdetails.name}
              onChange={setdata}
            />

          </div>
          <div class="form-group mb-6">
            <input
              type="email"
              class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp124"
              name="email"
              placeholder="Email"
              value={formdetails.email}
              onChange={setdata}
            />
         
            <br />
          </div>
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Age"
            value={formdetails.age}
            onChange={setdata}
            name="age"
          />
       
          <br />
        </div>
        <div class="form-group mb-6">
          <input
            type="number"
            class="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Mobile"
            value={formdetails.mobile}
            onChange={setdata}
            name="mobile"
          />
      
          <br />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="work"
            values={formdetails.work}
            onChange={setdata}
            name="work"
          />
          
          <br />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            name="location"
            class="form-control
              
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-describedby="emailHelp123"
            placeholder="Location"
            value={formdetails.location}
            onChange={setdata}
          />
         
          <br />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            name="gender"
            class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-describedby="emailHelp123"
            placeholder="Gender"
            value={formdetails.gender}
            onChange={setdata}
          />
      
          <br />
        </div>

        <button
        onClick={updateuser}
          type="submit"
          class="
    w-full
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
        >
          Click to Update !!!!!!!!
        </button>
      </div>
    </div>
  </div>
        </div>
    )
}