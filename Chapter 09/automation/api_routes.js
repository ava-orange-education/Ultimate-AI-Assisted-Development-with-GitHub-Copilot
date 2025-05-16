// Prompt: "Create CRUD operations for a user's resource in Express.js."

app.get('/users', (req, res) => {
    // Retrieve users
    const users = db.getUsers();
    res.json(users);
  });
  
  app.post('/users', (req, res) => {
    // Add user
    const { name, email, role } = req.body;
    
    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    const newUser = db.createUser({ name, email, role });
    res.status(201).json(newUser);
  });
  
  app.put('/users/:id', (req, res) => {
    // Update user
    const { id } = req.params;
    const { name, email, role } = req.body;
    
    const updatedUser = db.updateUser(id, { name, email, role });
    
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(updatedUser);
  });
  
  app.delete('/users/:id', (req, res) => {
    // Delete user
    const { id } = req.params;
    
    const success = db.deleteUser(id);
    
    if (!success) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User deleted successfully' });
  });