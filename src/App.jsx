import { NavigationRoutes } from "./Routes/NavigationRoutes";
import { AvatarProvider } from "./context/AvatarContext";
import { VillainProvider } from "./context/villainContext";

const App = () => {
    return (
        <VillainProvider>
            <AvatarProvider>
                <NavigationRoutes />
            </AvatarProvider>
        </VillainProvider>
    );
}

export default App;