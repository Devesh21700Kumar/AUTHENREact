import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

/*
const PageOne =()=>{
    return(
    <div>
    PageOne
    <Link to='/pagetwo'>P1</Link>
    </div>
    );
}


const PageTwo =()=>{
    return(
    <div>
    PageTwo
    <button>CLICK ME!</button>
    <Link to='/'>P2</Link>
    </div>
    );
}




const App =()=>{
    return( 
    <div>
    <BrowserRouter>
    <div>
    <Route path='/'  exact component={PageOne} />
    <Route path='/pagetwo'  component={PageTwo} />
    </div>
    </BrowserRouter>
    </div>);
}
*/


const App =()=>{
    return( 
    <div className='ui container'>
         
    
    <BrowserRouter>
    <div>

    <Header/>
    <Route path='/'  exact component={StreamList} />
    <Route path='/streams/new'   component={StreamCreate} />
    <Route path='/streams/edit'   component={StreamEdit} />
    <Route path='/streams/delete'   component={StreamDelete} />
    <Route path='/streams/show'   component={StreamShow} />
 
    </div>
    </BrowserRouter>
    </div>
    );
}

export default App;