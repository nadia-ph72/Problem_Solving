import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import RowList from './RowList'
import NameList from './NameList'
import NumberPersonnel from './NumberPersonnel'
import styles from './Table.module.css'
import DateOfEmployeement from './DateOfEmployeement'
import YearsOfService from './YearsOfService'



const Table = () => {



  return (
 
    <div>
      
        <table className={`${styles.mainTable}`}>
        <thead>
            <tr>
                <td><Link to='row' onChange={RowList} className={`${styles.tableLink}`}>ردیف</Link></td>                
                <td><Link to='names' onChange={NameList} className={`${styles.tableLink}`}>نام و نام خانوادگی</Link></td>
                <td><Link to='number' onChange={NumberPersonnel} className={`${styles.tableLink}`}>شماره پرسنلی</Link></td>
                <td><Link to='date' onChange={DateOfEmployeement} className={`${styles.tableLink}`}>تاریخ استخدام</Link></td>
                <td><Link to='history' onChange={YearsOfService} className={`${styles.tableLink}`}>سابقه خدمت</Link></td>
            </tr>
            </thead>
        </table>
       <Outlet/>
    </div>
  
   

   
   
  )
}

export default Table