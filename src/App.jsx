import { NavigationRoutes } from "./Routes/NavigationRoutes";
import { AvatarProvider } from "./context/AvatarContext";

const App = () => {
    return (
        <AvatarProvider>
            <NavigationRoutes />
        </AvatarProvider>
    );
}

export default App;