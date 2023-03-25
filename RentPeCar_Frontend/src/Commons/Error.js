import React ,{useEffect} from 'react'

function Error() {

    useEffect(() => {
         setTimeout(function(){
                        window.location.pathname = '/';
                     }, 4000);
    }, [])
    return (
        <div>
            <img style={{width: '100%'}} src="/images/403.jpg"></img>
        </div>
    )
}

export default Error
