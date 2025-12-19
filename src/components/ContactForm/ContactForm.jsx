import styles from './ContactForm.module.css'
import Button from '../Buttons/Button.jsx'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from 'react';
export const ContactForm = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        comment: ""
    });

   function onSubmitHandler(e){
        e.preventDefault();
        console.log(input);
   }
    return (
        <div className={`container ${styles.contactForm}`}>
            <div>
                <form onSubmit={onSubmitHandler} className={styles.formControl}>
                    <div className={styles.topBtn}>
                        <Button icon={<MdMessage fontSize="24px" />} text={"VIA SUPPPORT CHAT"} />
                        <Button icon={<FaPhoneAlt fontSize="24px" />} text={"VIA CALL"} />
                        <div className={styles.bottomBtn}>
                            <Button isOutline={true} icon={<MdOutlineMail />} text={"VIA EMAIL FORM"} />
                        </div>
                    </div>
                    <input type="text" placeholder='Name'
                     value={input.name} onChange={(e) => setInput({...input, name: e.target.value})} />
                    <input type="text" placeholder='Email' value={input.email} onChange={(e) => setInput({...input, email: e.target.value})} />
                    <textarea placeholder='Comment' rows={8} value={input.comment} onChange={(e) => setInput({...input, comment: e.target.value})}></textarea>
                    <Button type={"submit"} icon={<MdOutlineMail />} text={"Submit"} />
                </form>
            </div>
            <div className={styles.image}>
                <img src="contact.svg" alt="image" />
            </div>
        </div>
    )
}
