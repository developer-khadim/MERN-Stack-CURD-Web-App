import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';

// Components
import DashboardHeader from '../components/DashboardHeader';
import UserStats from '../components/UserStats';
import UserCard from '../components/UserCard';
import Toast from '../components/Toast';
import UserForm from '../components/UserForm';

const Page = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [notification, setNotification] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    // Fetch Users using Axios
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/readall');
            setUsers(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching users:", error);
            showNotification('error', 'Failed to fetch users. Is the backend running?');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Notification Handler
    const showNotification = (type, message) => {
        setNotification({ type, message });
        setTimeout(() => setNotification(null), 3000);
    };

    // Modal Handlers
    const handleOpenCreate = () => {
        setEditingUser(null);
        setIsCreateModalOpen(true);
    };

    const handleOpenEdit = (user) => {
        setEditingUser(user);
        setIsCreateModalOpen(true);
    };

    // Form Submission Handler (Create & Update)
    const handleFormSubmit = async (formData) => {
        setIsSubmitting(true);
        try {
            if (editingUser) {
                // Update existing user
                await axios.put(`/api/update/${editingUser._id}`, formData);
                showNotification('success', 'User updated successfully');
            } else {
                // Create new user
                await axios.post('/api/create', formData);
                showNotification('success', 'User created successfully');
            }

            setIsCreateModalOpen(false);
            fetchUsers();
            setEditingUser(null);
        } catch (error) {
            console.error(error);
            showNotification('error', error.response?.data?.message || 'Operation failed');
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            await axios.delete(`/api/delete/${id}`);
            showNotification('success', 'User deleted successfully');
            fetchUsers();
        } catch (error) {
            showNotification('error', error.response?.data?.message || 'Failed to delete user');
        }
    };

    // Filter Logic
    const filteredUsers = users.filter(user =>
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <DashboardHeader
                loading={loading}
                onRefresh={fetchUsers}
                onCreate={handleOpenCreate}
            />

            <UserForm
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSubmit={handleFormSubmit}
                isLoading={isSubmitting}
                initialData={editingUser}
            />

            {notification && (
                <Toast type={notification.type} message={notification.message} />
            )}

            <UserStats
                totalUsers={users.length}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            {/* Users Grid */}
            {loading && users.length === 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 h-48 animate-pulse">
                            <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                            <div className="h-3 bg-gray-100 rounded w-full mb-2"></div>
                            <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                        </div>
                    ))}
                </div>
            ) : filteredUsers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
                    {filteredUsers.map((user, index) => (
                        <UserCard
                            key={user._id || index}
                            user={user}
                            onUpdate={handleOpenEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white/50 rounded-3xl border border-dashed border-gray-300">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Search className="w-8 h-8 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">No users found</h3>
                    <p className="text-gray-500 max-w-sm text-center mt-2">
                        Try adding a new user or adjusting your search filters.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Page;