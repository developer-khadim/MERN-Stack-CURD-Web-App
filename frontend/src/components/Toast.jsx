import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Toast = ({ type, message }) => {
    return (
        <div className={`fixed top-24 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg animate-fade-in-up md:max-w-md w-full border ${type === 'success'
                ? 'bg-green-50 border-green-200 text-green-700'
                : 'bg-red-50 border-red-200 text-red-700'
            }`}>
            {type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <p className="text-sm font-medium">{message}</p>
        </div>
    );
};

export default Toast;
