import PropTypes from "prop-types"
import { useState } from "react"
import styles from './Collapse.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

function Collapse({title,content,size}){
    const[isOpen,setIsOpen]=useState(false)
    const collapseSize=size==='large'?'collapse':'collapse-medium'
    const option=isOpen?'--open':''
    return(
        <div className={styles[collapseSize]}>
            <div className={styles[`${collapseSize}__top-bar`]}>
                <p className={styles[`${collapseSize}__top-bar__title`]}>{title}</p>
                <button className={`${styles[`${collapseSize}__top-bar__button`]} ${isOpen?styles[`${collapseSize}__top-bar__button${option}`]:''}`} onClick={()=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            <div className={`${styles[`${collapseSize}__frame`]} ${isOpen?styles[`${collapseSize}__frame${option}`]:''}`}>
                {Array.isArray(content)?
                <ul className={styles[`${collapseSize}__frame__content`]}>
                    {content.map((item)=>
                    <li key={item}>{item}</li>)}
                </ul>:
                <p className={`${styles[`${collapseSize}__frame__content`]} ${isOpen?styles[`${collapseSize}__frame__content${option}`]:''}`}>{content}</p>}
            </div>
        </div>
    )

}
Collapse.propTypes={
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired,
    size:PropTypes.string
}
export default Collapse