import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';

    
    const NotFound = () => <h1>404: Not Found</h1>;
    
    function AppRouter() {
        return (
            <>
                <Routes>
                    {/*Ruta default */}
                    <Route path="/" element={<Home />} />
                    {/*comodin para rutas no validas */}
                    <Route path="*" element={<Navigate to="/404" />} />

                    {/*Rutas disponibles */}
                    <Route path="404" element={<NotFound />} />
    
                    <Route path="home" element={<Home />} />
                  
                </Routes>
            </>
        );
    }
    
export default AppRouter;