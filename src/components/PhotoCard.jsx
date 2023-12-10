
export const PhotoCard = ({children}) => {
    return (
        <div className="bg-gray-10 bg-gray-300 dark:bg-gray-700 dark:text-gray-300 text-black grid grid-cols-2 gap-10 m-auto my-8 rounded-xl shadow-md shadow-slate-500 dark:shadow-black">
            {children}
        </div>
    )
}
