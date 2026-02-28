// Importing the express framework 
const express = require("express");
const app =express(); // created express app

const PORT =3000; /// craeted port 
app.use(express.json());

/* Data Source in memory */

let users=[
    {
        id: "1",
        firstName: "Ram",
        lastName:"Pothineni",
        hobby:"Acting",
    },
];

// Logging Middleware 
// Logs request methd,URL and status code 

app.use((req,res,next)=>{
    res.on("finish",()=>{
        console.log(`${req.method} ${req.originalUrl} -Status: ${res.statusCode}`

        );
    });
    next();
})


// ValidateUser Middleware - Ensures required fields exist

function validateUser(req,res,next){
    const{firstName,lastName,hobby}=req.body;

    if(!firstName || !lastName || !hobby){
        return res.status(400).json({
            error:"firstName,lastName and hobby are required fields.",
        });
    }
    next();
}

/// Routes 
 

/* GET /users-Get all users */

app.get("/users",(req,res)=>{
    res.status(200).json(users);
});

// Get /users/:id -get users by ID 

app.get("/users/:id",(req,res)=>{
    const user = users.find((u)=>u.id === req.params.id);
    if(!user) {
        return res.status(404).json({message:"error not found."});
    }
    res.status(200).json(user);
});

/* POST /User -Add new user */

app.post("/user", validateUser,(req,res)=>{
    const newUser ={
        id:(users.length +1).toString(),
        ...req.body,
    };
    users.push(newUser);

    res.status(201).json({
        message:"User created successfully.",
        user:newUSer,
    });
});


// PUT /user/:id -Update user 

app.put("/user/:id",validateUser,(req,res)=>{
    const userIndex = users.findIndex(
        (u)=> u.id === req.params.id
    );
    if (userIndex === -1){
        return res.status(404).json({error:"User not found."});
    }
    users[userIndex]={
        id:req.params.id,
        ...req.body,
    };
    res.status(200).json({
        message:"User updated successfully.",
        user:users[userIndex],
    });

});


// DELETE /user/:id -Delete user 

app.delete("user/:id", (req,res)=>{
    const userIndex =users.indIndex(
        (u) => u.id == req.params.id
    );
    if(userIndex === -1){
        return res.status(404).json({error:"user not found."});
    }

    const deletedUser = users.splice(userIndex,1);

    res.status(200).json({
        message:"User deleted successfully.",
        user:deletedUser[0],
    });
});

/// Global error Handler 

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({
        error:"Internal server error.",
    });
});


/// To start  Server

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});