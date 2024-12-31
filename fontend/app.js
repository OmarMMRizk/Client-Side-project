const button = document.querySelector('button');

button.addEventListener('click', (e)=>{
    e.preventDefault();
})

app.get('/login', (req, res) => {
    res.json({ success: true, message: "User logged in" });
});