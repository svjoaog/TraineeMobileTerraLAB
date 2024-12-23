import React, {useState} from 'react';

interface IState{
    isLoggedIn : boolean;
}
interface IProps{}

let AuthUser:React.FC<IProps> = () => {
    let [state , setState] = useState<IState>({
        isLoggedIn : false
    });

    let login = ():void => {
        setState({isLoggedIn : true});
    };

    let logout = ():void => {
        setState({isLoggedIn : false});
    };


    return(
        <React.Fragment>
           <div className="container">
               <div className="row">
                   <div className="col-md-5">
                       {
                           state.isLoggedIn ? <React.Fragment>
                               <div>
                                   <p className="h3 text-success">Welcome User!</p>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi asperiores consequuntur dolorem eligendi enim fugiat id laboriosam molestiae, nam non obcaecati quasi quo sit vitae voluptas! Corporis, cumque?</p>
                               </div>
                           </React.Fragment> : <React.Fragment>
                               <div>
                                   <p className="h3 text-primary">Thank You!</p>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem blanditiis corporis cupiditate, distinctio doloremque dolorum ducimus, eius eligendi incidunt iste natus necessitatibus nemo neque nesciunt perferendis sequi similique veritatis.</p>
                               </div>
                           </React.Fragment>
                       }
                   </div>
                   <div className="row">
                       <div className="col">
                           {
                               state.isLoggedIn ?
                                   <button className="btn btn-warning m-1" onClick={logout}>Logout</button> :
                                   <button className="btn btn-success m-1" onClick={login}>Login</button>
                           }
                       </div>
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
};
export default AuthUser;