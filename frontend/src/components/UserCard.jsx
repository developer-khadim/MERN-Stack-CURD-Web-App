import React from 'react';
import { Edit2, Trash2, Mail } from 'lucide-react';

const UserCard = ({ user, onUpdate, onDelete }) => {
    return (
        <div className="group bg-white hover:bg-blue-50/30 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xl font-bold text-gray-500 group-hover:from-blue-100 group-hover:to-purple-100 group-hover:text-blue-600 transition-colors">
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                        <button
                            onClick={() => onUpdate(user)}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors shadow-sm cursor-pointer"
                            title="Edit User"
                        >
                            <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => onDelete(user._id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-lg transition-colors shadow-sm cursor-pointer"
                            title="Delete User"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">
                    {user.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1 font-mono">@{user.username || 'unknown'}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 bg-gray-50 p-2 rounded-lg group-hover:bg-white transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{user.email}</span>
                </div>
            </div>

            {/* Decorational Background Gradient */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        </div>
    );
};

export default UserCard;
