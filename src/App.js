import React from 'react';
import Card  from './Card';
import Movies from './Movies'


const App = () => (
     <>
       <h1 className="heading">Top Netflix Series</h1>
        {Movies.map((val) =>{
          return (
            <Card 
              key={val.id}
              sname={val.sname}
              imgsrc={val.imgsrc}
              title={val.title}
              links={val.links}
          />
          )     
       })}
     </>
);
export default App;