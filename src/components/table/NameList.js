import React from 'react'
import styles from './Table.module.css'

const nameList = ["Mohammad ahmadi", "Ali Binaei", "Soheil bazyari", "Jamshid Sheykhi", "Bardia Sadeghi"]
nameList.sort()


  // var random = []
  // var text = ''
  // var characters = 'abcdefghijklmnopqrstuvwxyz'
  // for(var i= 0; i< 5; i++){
  //   text =characters.charAt(Math.floor(Math.random() * characters.length))
  //   if (random.indexOf (text) === -1) {
  //     				random.push (text); 
  //     				} 
  //     			else i--; 
  //           for(var j = 0; j < 5; j++){
  //             var temp = characters.charAt(Math.floor(Math.random() * characters.length))
  //             if (text.indexOf (temp) === -1) {
  //               random.push (temp); 
  //               } 
  //             else j--; 
  //           }
  //     		}
          
          
  //         random.sort()
  
 



const NameList = () => {
  return (
    <div className={`${styles.tableList}`}>
        {nameList.map((item)=> {
            
            return (
                <h1>{item}</h1>
               
            )
        })}
    </div>
  )
}

export default NameList