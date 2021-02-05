import React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,
         Inject, Page, DetailRow} from '@syncfusion/ej2-react-treegrid';
import { textdata } from './datasource';
import './App.css';

function App() {
  const customRows =(props: any) => {
    return(
      //To render row template, remove the table and tbody tag.
      <table>
        <tbody>
          <tr className="template">
            {/* Uncomment below code to render row template. Note number of td tags and columreiective tag should be equal
            <td>
              <div style={{textAlign:"center"}}>{props.EmpID}</div>
            </td>
            <td>
              <div style={{fontSize: "12px"}}>
                {props.Name}
                <p style={{fontSize: "9px"}}>{props.Designation}</p>
              </div>
            </td> */}
            <td>
              <div style={{position:"relative", display:"inline-block"}}>  
                <img src={'https://ej2.syncfusion.com/react/demos/src/treegrid/images/' + props.FullName + '.png'} alt=""/>
              </div>
              <div style={{display:"inline-block"}}>
                <div style={{padding:"5px"}}>{props.Address}</div>
                <div style={{padding:"5px"}}>{props.Country}</div>
                <div style={{padding:"5px"}}>{props.Contact}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
  const customizeRow =(args:any) =>{
    if(args.data.Country === "UK"){
      args.row.style.background = "#d3d3d3";
    }
  }
  const cutomizeCell =(args:any) =>{
    if(args.column.field === "Designation"){
      if(args.data.Designation !== "Sales Representative")
        args.cell.style.background = "#add8e6";
    }
  }
  return (
    //To render row template simply change the detailTemplate property to rowTemplate ib below code
    <TreeGridComponent dataSource={textdata} childMapping="subtasks" 
    treeColumnIndex={1} allowPaging={true} pageSettings={{pageSize:8}}
    detailTemplate={customRows} rowDataBound={customizeRow} queryCellInfo={cutomizeCell}>
      <Inject services={[Page, DetailRow]} /> 
      <ColumnsDirective>
        {/* To render row template, remove the field property in all columns. Also remove the country and designation ColumnDirective tags */}
        <ColumnDirective headerText= 'Employee ID' 
        field= 'EmpID' textAlign="Center"></ColumnDirective>
        <ColumnDirective headerText= 'Employee Name' 
        field= 'Name'></ColumnDirective>
        <ColumnDirective headerText= 'Employee Details' 
        field= 'Address'></ColumnDirective>
        <ColumnDirective headerText="Country" field="Country">
        </ColumnDirective>
        <ColumnDirective headerText="Designation" field="Designation">
        </ColumnDirective>
      </ColumnsDirective>                  
    </TreeGridComponent>
  );
}

export default App;
