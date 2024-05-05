import React from "react";

function DeleteAccountModal({ isOpen, onClose, onDelete }) {
    const handleDelete = () => {
        onDelete();
        onClose();
    };

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeleteAccountModal;
