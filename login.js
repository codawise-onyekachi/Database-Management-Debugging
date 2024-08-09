document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        //const authMsg = document.getElementById('auth-msg');

        

        try{
            const response = await fetch('/api/login', {
                method: 'POST',
                headers:  {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json()

            if(!response.ok) {
                window.location.href = data.redirectUrl;
                //authMsg.textContent = data
            } else {
                alert(data.message || 'Login failed');
                //authMsg.textContent = data
            }

        } catch (err) {
            console.error('Error:', err);
                alert('An error occurred. Please try again.');
            //authMsg.textContent = err
        }
    })

})