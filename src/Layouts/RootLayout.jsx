import { Outlet, useNavigation } from 'react-router'; // Changed to react-router-dom
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';

const RootLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="flex flex-col min-h-screen w-full bg-base-100 overflow-x-hidden">

            {/* Header: Full width on mobile, responsive padding on larger devices */}
            <header className="sticky top-0 z-40 w-full bg-base-100">
                <div className="w-full md:px-12 lg:px-16 md:my-4 px-4 py-2">
                    <Navbar />
                </div>
            </header>

            {/* Loading Indicator */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4 bg-base-100/10 backdrop-blur-md rounded-2xl px-10 py-8 shadow-xl border border-white/10">
                        <span className="loading loading-dots text-primary h-14 w-14"></span>
                        <p className="text-sm font-medium text-white/90 tracking-widest uppercase">
                            Loading...
                        </p>
                    </div>
                </div>
            )}

            {/* Main Content: Takes full available screen space natively */}
            <main className={`
    flex-1 w-full
    transition-opacity duration-300
    ${isLoading ? "opacity-40 pointer-events-none select-none" : "opacity-100"}
`}>
                <Outlet />
            </main>

            {/* Footer Wrapper: Edge-to-edge on mobile, margin applied back on md/lg devices */}
            <footer className="w-full md:px-12 lg:px-16 md:my-4 px-4 py-4 mt-auto">
                <Footer />
            </footer>

        </div>
    );
};

export default RootLayout;