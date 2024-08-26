export const logout= () => {
    localStorage.clear()
    location.href = './auth-page'
}