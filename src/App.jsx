import { AuthProvider } from "./context/AuthContext";
import { AvatarProvider } from "./context/AvatarContext";
import { NavigationRoutes } from "./Routes/NavigationRoutes";

const App = () => {
    return (
        <AuthProvider>
            <AvatarProvider>
                <NavigationRoutes />
            </AvatarProvider>
        </AuthProvider>
    );
}

export default App;