import React from 'react';
import {connect} from 'react-redux';
import { signIn,signOut} from '../actions';


class GoogleAuth extends React.Component{
 //state={isSignedIn:null};

  componentDidMount()  {
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId:'361712266609-m8cg6j7hrr2vert8c8p77dkl42kar3u5.apps.googleusercontent.com',
        scope:'email'
      }).then(()=>{
      this.auth=window.gapi.auth2.getAuthInstance();
     //this.setState({isSignedIn: this.auth.isSignedIn.get()})
     this.onAuthChange(this.auth.isSignedIn.get());
     
     //WE COULD USE THE BELOW
      //this.onAuthChange();
     this.auth.isSignedIn.listen(this.onAuthChange);  
    });
    });
  }

onAuthChange=isSignedIn=>{
//this.setState({isSignedIn:this.auth.isSignedIn.get()});
if(isSignedIn){
  this.props.signIn(this.auth.currentUser.get().getId());
}else{
  this.props.signOut();
}
} ; 

onSignInClick=()=>{
this.auth.signIn();
};

onSignOutClick=()=>{
  this.auth.signOut();
  };

renderAuthButton(){
 if (this.props.isSignedIn===null){
   return null;
 }else if (this.props.isSignedIn){
  return(
  <button onClick={this.onSignOutClick} className='ui red google button'>
    <i className='google icon'>Sign Out!</i>
    </button>
    );
}
else{
  return (
  <button onClick={this.onSignInClick} className='ui red googlr button'>
    <i className='google icon'/>
    SIGN IN WITH GOOGLE
    </button>
  );
}
}


  render(){
        return(
        <div>
          {this.renderAuthButton()}
        </div>
        );
    }
}

const mapStateToProps=(state)=>{
return{isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);