import React from "react";

const ContactCard=(props)=>{
    const {id,email,name}=props.contact;
    return(
        <div className="item" key={id}>
                <div className="content">
                    <div className="header">
                         {name}
                    </div>
                    <div>
                        {email}
                    </div>
                    
                </div>
                <div className="right floated content">
                        <i className="trash alternate outline icon"></i>
                </div>            
        </div>
    )
}


export default ContactCard;