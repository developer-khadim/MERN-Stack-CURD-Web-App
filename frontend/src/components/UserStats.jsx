import React from 'react';
import { Search, User } from 'lucide-react';

const UserStats = ({ totalUsers, searchTerm, onSearchChange }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div className="col-span-1 flex items-center md:col-span-2 relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                    type="text"
                    placeholder="Search users by name or email..."
                    className="w-full pl-11 pr-4 py-3 bg-white/80 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-sm group-hover:shadow-md"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            {/* Stat Card */}
            <div className="bg-white/80 p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500 font-medium">Total Users</p>
                    <p className="text-2xl font-bold text-gray-800">{totalUsers}</p>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <User className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
};

export default UserStats;
