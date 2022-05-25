const { createContext } = require("react");

export const userContext = createContext()

export const UserProvider = ({children}) => {
  const currentUser = {
    image: "/assets/user-images/image-zena.jpg",
    name: "Zena Kelley",
    username: "velvetround"
  }
  return <userContext.Provider value={{currentUser}}>{children}</userContext.Provider>
}