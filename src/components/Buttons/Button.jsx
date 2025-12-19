

import styles from './Button.module.css'

export default function Button({isOutline,icon,text,type}){
  return (
    <div>
        <button type={type} className={isOutline ? styles.outlineBtn : styles.primaryBtn}>
            {icon}
            {text}
        </button>
    </div>
  )
}
