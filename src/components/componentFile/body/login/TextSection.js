import React, {Component} from 'react'
import styles from "../../../styles/textSection.module.css"

class TextSection extends Component {
    state = { 
        date:this.date
     }
     
     datee=()=>{
         const date = new Date().getTime
         console.log(date)
        }
        
        render() { 
        return ( 

        <div className={styles.textSection}>
            <h1 className={styles.heading} > Internship schedule for 2019</h1>
            <p className={styles.notes}>LearnFactory has a very deep and intense internship accompanied by a dense matrix of schedules </p>
         
        </div>
    

         );
    }
}
 
export default TextSection;
