import React from 'react'
import styles from './Table.module.css'


var max = 30; 
var min = 10
	var random = []; 
	

		for (var i = 0; i <5; i ++) {
			var temp = Math.floor(Math.random() * (max - min + 1)) + min 
			if (random.indexOf (temp) === -1) {
				random.push (temp); 
				} 
			else i--; 
		}
    random.sort()

const DateOfEmployeement = () => {
  return (
    <div className={`${styles.tableList}`}>
        {random.map((item)=> {
            return (
                <h1>{item}</h1>
            )
        })}
    </div>
  )
}

export default DateOfEmployeement