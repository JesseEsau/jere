export const Card = ({children, classes}) => {
    return (
        <div className={`bg-gray-10 ${classes} bg-gray-300 dark:bg-gray-700 dark:text-gray-300 text-black grid grid-cols-1 gap-10 m-auto my-8 rounded-xl shadow-md shadow-slate-500 dark:shadow-black`}>
            {children}
        </div>
    )
}
