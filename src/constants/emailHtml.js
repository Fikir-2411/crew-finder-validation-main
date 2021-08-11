export const html = (url, verification=false) => {
    if (!verification) {
        return `
                <h1>You have requested a password reset</h1>
                <p>Please make a put request to the following 
                    <a href="http://${url}" clicktracking=off>$link</a>
                </p>
                
            `;
    }
    return `
            <h1>Thank you for registering to crew finder</h1>
            <p>Please click the following <a href="http://${url}" clicktracking=off>link</a> 
                to confirm your email address.
            </p>
            <footer> Crew Finder Team </footer>
        `;
}