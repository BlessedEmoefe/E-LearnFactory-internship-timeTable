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
            <h1 >LearnFactory's Internship schedule for 2019</h1>
         
        </div>
    

         );
    }
}
 
export default TextSection;
