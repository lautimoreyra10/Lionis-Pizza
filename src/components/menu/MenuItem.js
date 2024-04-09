export const MenuItem = () => {
    return (
        <div className="flex flex-col items-center
         bg-gray-200 p-4 rounded-lg text-center my-4 
         hover:bg-white hover:shadow-md hover: 
         shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/pza.png" alt="pizza" width={200} height={200} className="max-h-auto max-w-24 block mx-auto" />
            </div>
            <h4 className="font-semibold my-3 text-xl">
                Pepperoni Pizza
            </h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit
                amet consectetur adipisicin
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2 ">
                Add to cart $12
            </button>
        </div>
    )
}