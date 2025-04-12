const {user , password} = process.env
console.log(user , password); 

// const username = process.env.user
// const password = process.env.password

export const connectionSrt = "mongodb+srv://"+user+":"+password+"@cluster0.gn5zai1.mongodb.net/sellany?retryWrites=true&w=majority&appName=Cluster0"; 
