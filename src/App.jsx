import { AuthProvider } from "./context/AuthContext";
import { AvatarProvider } from "./context/AvatarContext";
import { VillainProvider } from "./context/villainContext";
import { NavigationRoutes } from "./Routes/NavigationRoutes";

const App = () => {
    return (
        <AuthProvider>
            <VillainProvider>
                <AvatarProvider>
                    <NavigationRoutes />
                </AvatarProvider>
            </VillainProvider>
        </AuthProvider>
    );
}

export default App;