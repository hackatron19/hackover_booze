import React, { Component } from 'react';
import Smile from './smile';
import Postdata from '../10377.json';
 const postdata = [Postdata];
class Inner extends Component {
     add=(p,m)=>{
         return (parseInt(p)+parseInt(m));
     }
     percent=(p,m)=>{
        
         if(parseInt(p)/(parseInt(p)+parseInt(m))*100>=75)  return true;
          return false;
    }
    
    render() { 
        
        return ( 
            <div >
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Student name</th>
                        <th>Roll Number</th>
                        <th>Branch</th>
                    </tr>
                </thead>
            <tbody>
            {postdata.map(n=>
                (<tr key={n._id} className="table-primary">
                    <td>{n.name}</td>
                    <td>{n.roll}</td>
                    <td>{n.branch}</td>
                    </tr>))}           
            </tbody>
            </table>
            <br></br>   
            
          <table className="table table-bordered table-dark">
                <thead className="thead-dark">
                    <tr>
                        <th>Subject</th>
                        <th>Present</th>
                        <th>Absent</th>
                        <th>Total</th>
                        <th>Remarks
                        </th>
                    </tr>
                </thead>
            <tbody>
            {postdata[0].subjects.map(sub=>
                (<tr key={sub._id}>
                    <td>{sub.name}</td>
                    <td>{sub.present}</td>
                    <td>{sub.absent}</td>
                    <td>{this.add(sub.present,sub.absent)}</td>
                    <td><Smile smilee={this.percent(sub.present,sub.absent)} /></td>
                    
                </tr>))}           
            </tbody>
            </table>
        </div> 
         );
    }
}
 
export default Inner ;