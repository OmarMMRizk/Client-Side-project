app.get('/login', (req, res) => {
    res.json({ success: true, message: "User logged in" });
});