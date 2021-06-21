import React from 'react';
import { useRouter } from 'next/router';

const User = () => {
    const router = useRouter();
    
    return (  
        <div>
            <h2>User Detailes</h2>
            <p>User ID: {router.query.user}</p>
        </div>
    );
}

export default User