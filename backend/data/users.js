import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@derive.example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Jack',
    email: 'jack@derive.example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jess',
    email: 'jess@derive.example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users