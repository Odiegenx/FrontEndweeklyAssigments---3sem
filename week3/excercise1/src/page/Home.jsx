export default function Home({currentUser}) {
    return currentUser ? (
            <div>
                <h1>Home</h1>
                <p>Welcome, {currentUser.username}!</p>
            </div>) : (
        <div>
           <h1>Please log in</h1>
        </div>
    )
}