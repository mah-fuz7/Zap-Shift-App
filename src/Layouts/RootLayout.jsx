import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';

const RootLayout = () => {
     const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div className="flex flex-col min-h-screen w-full bg-base-100">

        
            <header className="sticky top-0 z-40 w-full  ">
                <div className=" mx-12.5 my-4 px-4 sm:px-6 lg:px-8">
                    <Navbar />
                </div>
            </header>

         
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

       
            <main className={`
                flex-1 w-full
                transition-opacity duration-300
                ${isLoading ? "opacity-40 pointer-events-none select-none" : "opacity-100"}
            `}>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>

    );
};

export default RootLayout;