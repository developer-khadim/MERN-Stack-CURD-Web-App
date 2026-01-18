import React from 'react';
import { RefreshCw, Plus } from 'lucide-react';

const DashboardHeader = ({ loading, onRefresh, onCreate }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm">
            <div>
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    User Management
                </h1>
                <p className="text-gray-500 mt-1">Manage your team members and permissions.</p>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={onRefresh}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-white rounded-lg transition-all cursor-pointer"
                    title="Refresh List"
                >
                    <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                </button>
                <button
                    onClick={onCreate}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all text-sm font-medium cursor-pointer"
                >
                    <Plus className="w-5 h-5" />
                    Add New User
                </button>
            </div>
        </div>
    );
};

export default DashboardHeader;
