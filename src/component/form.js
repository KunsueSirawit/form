import axios from "axios"
import { useEffect, useState } from "react"
import '../css/style.css'

const Form = () =>{

    //create state /////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [ userinfo  ,  setUserinfo ] = useState([])
    const [ userfname , setUserfname] = useState('')    
    const [ userlname , setUserlname] = useState('')
    const [ userusername , setUserusername] = useState('')
    const [ userpassword , setUserpassword ] = useState('')
    const [ userrepassword , setUserrepassword ] = useState('')
    const [ useremail , setUseremail ] = useState('')
    const [ useravatar , setUseravatar ] = useState('')

    const [ colorfname , setColorfname ] = useState('')
    const [ colorlname , setColorlname ] = useState('')
    const [ colorusername , setColorusername ] = useState('')
    const [ colorpassword , setColorpassword ] = useState('')
    const [ colorrepassword , setColorrepassword ] = useState('')
    const [ coloruseremail , setColoruseremail ] = useState('')
    const [ coloruseravatar , setColoruseravatar ] = useState('')
   
    const [ errorfname ,setErrorfname] = useState('')
    const [ errorlname ,setErrorlname] = useState('')
    const [ errorusername ,setErrorusername] = useState('')
    const [ errorpassword ,setErrorpassword] = useState('')
    const [ errorrepassword , setErorrepassword ] = useState('')
    const [ erroruseremail ,setErroruseremail] = useState('')
    const [ erroruseravatar ,setErroruseravatar] = useState('')

    const [ newid , setNewid ] = useState('')

    // Fetch URL /////////////////////////////////////////////////////////////////////////////////////////////////////

    const baseurl = 'https://www.melivecode.com/api/users'

    const getaxios = async () =>{
        const response = await axios.get(baseurl)
        setUserinfo(response.data)
    }

    useEffect(()=>{
        getaxios()
    },[])


    var raw = ({
           "fname" : userfname,
           "lname" : userlname,
           "username" : userusername,
           "password" : userpassword,
           "email" : useremail,
           "avatar" : useravatar
    })
    
    const postaxios = async() =>{
       const response = await axios.post((baseurl + '/create'), raw)
    }

    ///// Post  event ///////////////////////////////////////////////////////////////////////////////////////////////////

    const sendtoserver = (e) =>{
        e.preventDefault()

        if (userfname.length < 1 ){
            setColorfname('red')
            setErrorfname('Please add your firstname')
        } else {
            setColorfname('green')
            setErrorfname('')
        }

        if (userlname.length < 1){
            setColorlname('red')
            setErrorlname('Please add your lastname')
        } else{
            setColorlname('green')
            setErrorlname('')
        }

        if (userusername.length < 8 ){
            setColorusername('red')
            setErrorusername('Please enter more than 8 characters ')
        } else {
            setColorusername('green')
            setErrorusername('')
        }

        if (userpassword.length < 8 ){
            setColorpassword('red')
            setErrorpassword('Please enter more than 8 characters')
        } else {
            setColorpassword('green')
            setErrorpassword('')
        }
        
        if (userrepassword !== userpassword || userpassword.length < 8){
            setColorrepassword('red')
            setErorrepassword('Password is incorrect')
        } else {
            setColorrepassword('green')
            setErorrepassword('')
        }

        if (useremail.includes('@') ){
            setColoruseremail('green')
            setErroruseremail('')
        } else{
            setColoruseremail('red')
            setErroruseremail('Please add e-mail')
        }
        
        if (useravatar.length < 1){
            setColoruseravatar('red')
            setErroruseravatar('Please add photo link')
        } else {
            setColoruseravatar('green')
            setErroruseravatar('')
        }

        if ([colorfname,  colorlname, colorusername, colorpassword, coloruseremail, coloruseravatar].every(x => x == 'green')){
            postaxios()
            setUserfname('')
            setUserlname('')
            setUserusername('')
            setUserpassword('')
            setUserrepassword('')
            setUseremail('')
            setUseravatar('')
            alert('Register complete')
        }
    }

    ///// UI ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return(
        <div className="container">
            <form onSubmit={sendtoserver}>
                <div >
                    <div>
                        <h1> Register </h1>
                    </div>
                    <div className="inform">
                        <h3> Firstname </h3>
                        <input type="text" placeholder="your firstname" value={userfname}  onChange={(e) => setUserfname(e.target.value)} style={{borderColor:colorfname}}/>
                        <label style={{color:colorfname}}>  {errorfname}  </label>
                    </div>
                    <div className="inform">
                        <h3> Lastname </h3>
                        <input type="text" placeholder="your lastname" value={userlname}  onChange={(e) => setUserlname(e.target.value)} style={{borderColor:colorlname}} />
                        <label style={{color:colorlname}}>  {errorlname}  </label>
                    </div>
                    <div className="inform">
                        <h3> Username </h3>
                        <input type="text" placeholder="your username" value={userusername}  onChange={(e) => setUserusername(e.target.value)} style={{borderColor:colorusername}} />
                        <label style={{color:colorusername}}>  {errorusername}  </label>
                    </div>
                    <div className="inform">
                        <h3> Password </h3>
                        <input type="password" placeholder="your password" value={userpassword}  onChange={(e) => setUserpassword(e.target.value)} style={{borderColor:colorpassword}}  />
                        <label style={{color:colorpassword}}>  {errorpassword}  </label>
                    </div>
                    <div className="inform">
                        <h3> Repassword </h3>
                        <input type="password" placeholder="confirm your password" value={userrepassword}  onChange={(e) => setUserrepassword(e.target.value)} style={{borderColor:colorrepassword}}  />
                        <label style={{color:colorrepassword}}>  {errorrepassword}  </label>
                    </div>
                    <div className="inform">
                        <h3> Email </h3>
                        <input type="text" placeholder="your email" value={useremail}  onChange={(e) => setUseremail(e.target.value)}  style={{borderColor:coloruseremail}} />
                        <label style={{color:coloruseremail}}>  {erroruseremail}  </label>
                    </div>
                    <div className="inform">
                        <h3> Avatar </h3>
                        <input type="text" placeholder="your avatarlink" value={useravatar}  onChange={(e) => setUseravatar(e.target.value)}  style={{borderColor:coloruseravatar}} />
                        <label style={{color:coloruseravatar}}>  {erroruseravatar}  </label>
                    </div> 
                    <br/>
                    <button type="submit" className="submitform"> Submit </button>
                </div>
                <div className="link">
                <a href="https://www.melivecode.com/api/users" target="_blank" rel="noopener noreferrer"> Melivecode Api </a>
                </div>
        </form>
        </div>
    )
}

export default Form
