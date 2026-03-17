import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const userList = [
    {
        id: 1,
        username: "jsmith",
        password: "password1"
    },
    {
        id: 2,
        username: "jdoe",
        password: "password2"
    }
]

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

        const  { username, password } = credentials
      
      const user = userList.find((user) => user.username === username && user.password === password)
      if (user) {
        return user
      }
   
      return null
    }
  })
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }