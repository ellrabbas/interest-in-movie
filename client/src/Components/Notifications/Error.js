export const InlineError = ({ error }) => {
    return (
        <div className="text-red-600 bg-main rounded-md w-full text-xs font-medium">
            {error}
        </div>
    );
};
