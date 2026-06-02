import React from 'react';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-bg noise">
            <div className="flex flex-col items-center gap-6 relative z-10">
                <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white flex items-center justify-center shadow-lg">
                        <span className="text-white dark:text-black text-xl font-bold">D</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Loading</p>
                    <div className="w-40 h-0.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="loader-bar h-full bg-black dark:bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
